import {EDIT_ORDER_ACTION} from "./EDIT_ORDER_ACTION";


export const getCities = (cities) => {
    return {
        type: EDIT_ORDER_ACTION.ACTION_GET_CITIES,
        payload: cities
    }
}

export const getProducts = (products) => {
    return {
        type: EDIT_ORDER_ACTION.ACTION_GET_PRODUCTS,
        payload: products
    }
}

export const getMasters = (masters) => {
    return {
        type: EDIT_ORDER_ACTION.ACTION_GET_MASTERS,
        payload: masters
    }
}

export const writeClient = (client) => {
    return {
        type: EDIT_ORDER_ACTION.ACTION_WRITE_CLIENT,
        payload: client
    }
}

export const writeEmail = (email) => {
    return {
        type: EDIT_ORDER_ACTION.ACTION_WRITE_EMAIL,
        payload: email
    }
}

export const choosePrice = (price) => {
    return {
        type: EDIT_ORDER_ACTION.ACTION_CHOOSE_PRICE,
        payload: price
    }
}

export const chooseSize = (size) => {
    return {
        type: EDIT_ORDER_ACTION.ACTION_CHOOSE_SIZE,
        payload: size
    }
}

export const chooseDatetime = (datetime) => {
    return {
        type: EDIT_ORDER_ACTION.ACTION_CHOOSE_DATETIME,
        payload: datetime
    }
}

export const chooseCity = (city_id) => {
    return {
        type: EDIT_ORDER_ACTION.ACTION_CHOOSE_CITY_ID,
        payload: city_id
    }
}

export const chooseMaster = (master_id) => {
    return {
        type: EDIT_ORDER_ACTION.ACTION_CHOOSE_MASTER_ID,
        payload: master_id
    }
}

export const chooseProduct = (product_id) => {
    return {
        type: EDIT_ORDER_ACTION.ACTION_CHOOSE_PRODUCT_ID,
        payload: product_id
    }
}

export const onEditOrder = (order) => {
    return {
        type: EDIT_ORDER_ACTION.ACTION_ON_EDIT_ORDER,
        payload: order
    }
}