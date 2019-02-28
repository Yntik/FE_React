import {EDIT_CLIENT_ACTION} from './EDIT_CLIENT_ACTION';

export const onEditClient = (client) => {
	return {
		type:EDIT_CLIENT_ACTION.ACTION_ON_EDIT_CLIENT,
		payload: client
	};
};

export const getCities = (cities) => {
	return {
		type: EDIT_CLIENT_ACTION.ACTION_GET_CITIES,
		payload: cities
	};
};

export const writeName = (name) => {
	return {
		type: EDIT_CLIENT_ACTION.ACTION_WRITE_NAME,
		payload: name
	};
};

export const writeEmail = (email) => {
	return {
		type: EDIT_CLIENT_ACTION.ACTION_WRITE_EMAIL,
		payload: email
	};
};

export const chooseCity = (city) => {
	return {
		type: EDIT_CLIENT_ACTION.ACTION_CHOOSE_CITY,
		payload: city
	};
};