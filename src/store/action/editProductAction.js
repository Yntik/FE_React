import {EDIT_PRODUCT_ACTION} from './EDIT_PRODUCT_ACTION';


export const writePrice = (price) => {
	return {
		type: EDIT_PRODUCT_ACTION.ACTION_WRITE_PRICE,
		payload: price
	};
};

export const writeSize = (size) => {
	return {
		type: EDIT_PRODUCT_ACTION.ACTION_WRITE_SIZE,
		payload: size
	};
};
