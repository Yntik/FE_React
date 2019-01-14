export const auth0_option = {
    WebAuth: {
        domain: 'clockware.eu.auth0.com',
        clientID: 'f22JAIJHeWSAVgabhgTPeCOlkNzxsVCq',
        redirectUri: 'https://fc0d09ea.ngrok.io/callback',
        responseType: 'token id_token',
        scope: 'openid',
        audience: 'https://bc33edb6.ngrok.io/'
    },
    returnTo: 'https://fc0d09ea.ngrok.io/login',
    //returnTo: 'https://mighty-harbor-39325.herokuapp.com/login',
}