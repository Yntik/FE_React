import {ORDERS_ACTION} from "./ORDERS_ACTION";

export const getOrders = (orders) => {
    return {
        type: ORDERS_ACTION.ACTION_GET_ORDERS,
        payload: orders
    }
};