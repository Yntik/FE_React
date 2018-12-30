import {ADD_ACTION_MASTER} from "./ADD_MASTER_ACTION";

export const getCities = (cities) => {
    return {
        type: ADD_ACTION_MASTER.ACTION_GET_CITIES,
        payload: cities
    }
}

export const writeName = (name) => {
    return {
        type: ADD_ACTION_MASTER.ACTION_WRITE_NAME,
        payload: name
    }
}

export const writeSurname = (surname) => {
    return {
        type: ADD_ACTION_MASTER.ACTION_WRITE_SURNAME,
        payload: surname
    }
}

export const chooseRating = (rating) => {
    return {
        type: ADD_ACTION_MASTER.ACTION_CHOOSE_RATING,
        payload: rating
    }
}

export const chooseCity = (city) => {
    return {
        type: ADD_ACTION_MASTER.ACTION_CHOOSE_CITY,
        payload: city
    }
}