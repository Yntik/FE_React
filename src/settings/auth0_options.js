export const auth0_option = {
    WebAuth: {
        domain: 'clockware.eu.auth0.com',
        clientID: 'f22JAIJHeWSAVgabhgTPeCOlkNzxsVCq',
        redirectUri: 'https://shrouded-spire-22347.herokuapp.com/callback',
        responseType: 'token id_token',
        scope: 'openid',
        audience: 'https://bc33edb6.ngrok.io/'
    },
    returnTo: 'https://shrouded-spire-22347.herokuapp.com/login',
}