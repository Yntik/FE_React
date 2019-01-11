import auth0 from 'auth0-js';
import createHistory from 'history/createBrowserHistory';
import localStorage from 'localStorage'
import {auth0_option} from '../../settings/auth0_options'


export default class Auth {

    auth0 = new auth0.WebAuth({
        domain: auth0_option.WebAuth.domain,
        clientID: auth0_option.WebAuth.clientID,
        redirectUri: auth0_option.WebAuth.redirectUri,
        responseType: auth0_option.WebAuth.responseType,
        scope: auth0_option.WebAuth.scope,
        audience: auth0_option.WebAuth.audience
    });

    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.getAccessToken = this.getAccessToken.bind(this);
        this.getIdToken = this.getIdToken.bind(this);
        this.renewSession = this.renewSession.bind(this);
    }

    handleAuthentication(next) {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                console.log('setSession');
                localStorage.setItem('user_id', authResult.idTokenPayload.sub)
                this.setSession(authResult)
                return next()
            } else if (err) {
                console.log(err);
                Promise.reject(alert(`Error: ${err.error}. Check the console for further details.`));
            }
        });
    }

    login() {
        this.auth0.authorize();
    }

    getAccessToken() {
        return localStorage.getItem('accessToken');
    }

    getIdToken() {
        return localStorage.getItem('idToken');
    }

    setSession(authResult) {
        // Set isLoggedIn flag in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        // Set the time that the access token will expire at
        let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
        localStorage.setItem('accessToken', authResult.accessToken);
        localStorage.setItem('idToken', authResult.idToken);
        localStorage.setItem('expiresAt',  expiresAt);
        // navigate to the home route
    }

    renewSession() {
        this.auth0.checkSession({}, (err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
            } else if (err) {
                console.log(err);
                alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
            }
        });
    }

    logout() {
        // Remove tokens and expiry time
        this.auth0.logout({
            returnTo: auth0_option.returnTo,
            client_id: auth0_option.WebAuth.clientID
        });

        localStorage.clear('accessToken');
        localStorage.clear('idToken');
        localStorage.removeItem('expiresAt');
        localStorage.setItem('expiresAt', 0);
        // Remove isLoggedIn flag from localStorage
        localStorage.removeItem('isLoggedIn');

        // navigate to the home route

    }

    isAuthenticated() {
        // Check whether the current time is past the
        // access token's expiry time
        let expiresAt = localStorage.getItem('expiresAt');
        return new Date().getTime() < expiresAt;
    }
}