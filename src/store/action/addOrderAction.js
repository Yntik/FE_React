import {ADD_ORDER_ACTION} from './ADD_ORDER_ACTION';


export const getCities = (cities) => {
	return {
		type: ADD_ORDER_ACTION.ACTION_GET_CITIES,
		payload: cities
	};
};

export const getProducts = (products) => {
	return {
		type: ADD_ORDER_ACTION.ACTION_GET_PRODUCTS,
		payload: products
	};
};

export const getMasters = (masters) => {
	return {
		type: ADD_ORDER_ACTION.ACTION_GET_MASTERS,
		payload: masters
	};
};

export const writeName = (name) => {
	return {
		type: ADD_ORDER_ACTION.ACTION_WRITE_NAME,
		payload: name
	};
};

export const writeEmail = (email) => {
	return {
		type: ADD_ORDER_ACTION.ACTION_WRITE_EMAIL,
		payload: email
	};
};

export const chooseProduct = (product) => {
	return {
		type: ADD_ORDER_ACTION.ACTION_CHOOSE_PRODUCT,
		payload: product
	};
};

export const chooseCity = (city) => {
	return {
		type: ADD_ORDER_ACTION.ACTION_CHOOSE_CITY,
		payload: city
	};
};

export const chooseMaster = (master) => {
	return {
		type: ADD_ORDER_ACTION.ACTION_CHOOSE_MASTER,
		payload: master
	};
};

export const chooseDatetime = (datetime) => {
	return {
		type: ADD_ORDER_ACTION.ACTION_CHOOSE_DATETIME,
		payload: datetime
	};
};

export const chooseSize = (size) => {
	return {
		type: ADD_ORDER_ACTION.ACTION_CHOOSE_DATETIME,
		payload: size
	};
};