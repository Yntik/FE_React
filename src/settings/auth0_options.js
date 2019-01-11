export const auth0_option = {
    WebAuth: {
        domain: 'clockware.eu.auth0.com',
        clientID: 'f22JAIJHeWSAVgabhgTPeCOlkNzxsVCq',
        redirectUri: 'https://b716e97f.ngrok.io/callback',
        responseType: 'token id_token',
        scope: 'openid',
        audience: 'https://bc33edb6.ngrok.io/'
    },
    returnTo: 'https://b716e97f.ngrok.io/login',
}