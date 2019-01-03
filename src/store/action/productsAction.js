import {PRODUCTS_ACTION} from "./PRODUCTS_ACTION";

export const getProducts = (products) => {
    return {
        type: PRODUCTS_ACTION.ACTION_GET_PRODUCTS,
        payload: products
    }
}