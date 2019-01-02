import {MASTERS_ACTION} from "./MASTERS_ACTION";

export const getMasters = (masters) => {
    return {
        type: MASTERS_ACTION.ACTION_GET_MASTERS,
        payload: masters
    }
}