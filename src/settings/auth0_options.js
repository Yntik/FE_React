export const auth0_option = {
	WebAuth: {
		domain: 'clockware.eu.auth0.com',
		clientID: 'f22JAIJHeWSAVgabhgTPeCOlkNzxsVCq',
		redirectUri: 'http://clockware.s3-website.eu-central-1.amazonaws.com/callback',
		//redirectUri: 'https://8b84052e.ngrok.io/callback',
		responseType: 'token id_token',
		scope: 'openid',
		audience: 'https://bc33edb6.ngrok.io/'
	},
	//returnTo: 'https://8b84052e.ngrok.io/login',
	returnTo: 'http://clockware.s3-website.eu-central-1.amazonaws.com/login',
	//returnTo: 'https://mighty-harbor-39325.herokuapp.com/login',
};