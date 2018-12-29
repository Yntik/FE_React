import {initialState} from "./initialState/initialState";
import {ACTION_MASTERS} from "./action/MASTERS_ACTION";

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case ACTION_MASTERS.ACTION_GET_MASTERS:
            return {...state, mastersState: {
                    masters: action.payload,
                    blpra: state.mastersState.blpra
                }}
    }
    return state;
}