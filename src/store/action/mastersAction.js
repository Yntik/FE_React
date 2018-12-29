import {ACTION_MASTERS} from "./MASTERS_ACTION";

export const getMasters = (masters) => {
    return {
        type: ACTION_MASTERS.ACTION_GET_MASTERS,
        payload: masters
    }
}