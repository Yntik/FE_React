import LS from 'localStorage';

export const lsService = {
	save: ({token}) => {
		return LS.setItem('token', token);
	},
	get: (kay = 'token') => {
		return LS.getItem(kay);
	},
	clear: (kay = 'token') => {
		return LS.clear();
	}
};