import {EDIT_MASTER_ACTION} from "./EDIT_MASTER_ACTION";

export const onEditMaster = (master) => {
    return {
        type:EDIT_MASTER_ACTION.ACTION_ON_EDIT_MASTER,
        payload: master
    }
}

export const getCities = (cities) => {
    return {
        type: EDIT_MASTER_ACTION.ACTION_GET_CITIES,
        payload: cities
    }
}

export const writeName = (name) => {
    return {
        type: EDIT_MASTER_ACTION.ACTION_WRITE_NAME,
        payload: name
    }
}

export const writeSurname = (surname) => {
    return {
        type: EDIT_MASTER_ACTION.ACTION_WRITE_SURNAME,
        payload: surname
    }
}

export const chooseRating = (rating) => {
    return {
        type: EDIT_MASTER_ACTION.ACTION_CHOOSE_RATING,
        payload: rating
    }
}

export const chooseCity = (city) => {
    return {
        type: EDIT_MASTER_ACTION.ACTION_CHOOSE_CITY,
        payload: city
    }
}