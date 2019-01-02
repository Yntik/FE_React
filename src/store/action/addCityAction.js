import {ADD_CITY_ACTION} from "./ADD_CITY_ACTION";

export const writeName = (name) => {
    return {
        type: ADD_CITY_ACTION.ACTION_WRITE_NAME,
        payload: name
    }
}