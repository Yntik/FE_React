import {ADD_PRODUCT_ACTION} from './ADD_PRODUCT_ACTION';


export const writePrice = (price) => {
	return {
		type: ADD_PRODUCT_ACTION.ACTION_WRITE_PRICE,
		payload: price
	};
};

export const writeSize = (size) => {
	return {
		type: ADD_PRODUCT_ACTION.ACTION_WRITE_SIZE,
		payload: size
	};
};
