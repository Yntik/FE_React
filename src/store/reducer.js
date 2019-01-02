import {initialState} from "./initialState/initialState";
import {MASTERS_ACTION} from "./action/MASTERS_ACTION";
import {ADD_MASTER_ACTION} from "./action/ADD_MASTER_ACTION";
import {EDIT_MASTER_ACTION} from "./action/EDIT_MASTER_ACTION";
import {ACTION_CITIES} from "./action/CITIES_ACTION";
import {ADD_CITY_ACTION} from "./action/ADD_CITY_ACTION";

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        ////////////////////////////////MASTERS///////////////////////////////////////////////
        case MASTERS_ACTION.ACTION_GET_MASTERS:
            return {
                ...state, mastersState: {
                    masters: action.payload,
                }
            };
        ////////////////////////////////ADD_MASTERS////////////////////////////////////////////
        case ADD_MASTER_ACTION.ACTION_GET_CITIES:
            return {
                ...state, addMasterState: {
                    cities: action.payload,
                    master: {
                        name: state.addMasterState.master.name,
                        surname: state.addMasterState.master.surname,
                        rating: state.addMasterState.master.rating,
                        city: state.addMasterState.master.city,
                    }
                }
            };
        case ADD_MASTER_ACTION.ACTION_WRITE_NAME:
            return {
                ...state, addMasterState: {
                    cities: state.addMasterState.cities,
                    master: {
                        name: action.payload,
                        surname: state.addMasterState.master.surname,
                        rating: state.addMasterState.master.rating,
                        city: state.addMasterState.master.city,
                    }
                }
            };
        case ADD_MASTER_ACTION.ACTION_WRITE_SURNAME:
            return {
                ...state, addMasterState: {
                    cities: state.addMasterState.cities,
                    master: {
                        name: state.addMasterState.master.name,
                        surname: action.payload,
                        rating: state.addMasterState.master.rating,
                        city: state.addMasterState.master.city,
                    }
                }
            };
        case ADD_MASTER_ACTION.ACTION_CHOOSE_RATING:
            if (!(action.payload >= 0 && action.payload <= 5)) {
                action.payload = '';
            }
            return {
                ...state, addMasterState: {
                    cities: state.addMasterState.cities,
                    master: {
                        name: state.addMasterState.master.name,
                        surname: state.addMasterState.master.surname,
                        rating: action.payload,
                        city: state.addMasterState.master.city,
                    }
                }
            };
        case ADD_MASTER_ACTION.ACTION_CHOOSE_CITY:
            return {
                ...state, addMasterState: {
                    cities: state.addMasterState.cities,
                    master: {
                        name: state.addMasterState.master.name,
                        surname: state.addMasterState.master.surname,
                        rating: state.addMasterState.master.rating,
                        city: action.payload,
                    }
                }
            };
        ////////////////////////////////EDIT_MASTER////////////////////////////////////////////
        case EDIT_MASTER_ACTION.ACTION_ON_EDIT_MASTER:
            return {
                ...state, editMasterState: {
                    cities: state.editMasterState.cities,
                    master: action.payload
                }
            };
        case EDIT_MASTER_ACTION.ACTION_GET_CITIES:
            return {
                ...state, editMasterState: {
                    cities: action.payload,
                    master: {
                        name: state.editMasterState.master.name,
                        surname: state.editMasterState.master.surname,
                        rating: state.editMasterState.master.rating,
                        city: state.editMasterState.master.city,
                        id: state.editMasterState.master.id
                    }
                }
            };
        case EDIT_MASTER_ACTION.ACTION_WRITE_NAME:
            return {
                ...state, editMasterState: {
                    cities: state.editMasterState.cities,
                    master: {
                        name: action.payload,
                        surname: state.editMasterState.master.surname,
                        rating: state.editMasterState.master.rating,
                        city: state.editMasterState.master.city,
                        id: state.editMasterState.master.id
                    }
                }
            };
        case EDIT_MASTER_ACTION.ACTION_WRITE_SURNAME:
            return {
                ...state, editMasterState: {
                    cities: state.editMasterState.cities,
                    master: {
                        name: state.editMasterState.master.name,
                        surname: action.payload,
                        rating: state.editMasterState.master.rating,
                        city: state.editMasterState.master.city,
                        id: state.editMasterState.master.id
                    }
                }
            };
        case EDIT_MASTER_ACTION.ACTION_CHOOSE_RATING:
            if (!(action.payload >= 0 && action.payload <= 5)) {
                action.payload = '';
            }
            return {
                ...state, editMasterState: {
                    cities: state.editMasterState.cities,
                    master: {
                        name: state.editMasterState.master.name,
                        surname: state.editMasterState.master.surname,
                        rating: action.payload,
                        city: state.editMasterState.master.city,
                        id: state.editMasterState.master.id
                    }
                }
            };
        case EDIT_MASTER_ACTION.ACTION_CHOOSE_CITY:
            return {
                ...state, editMasterState: {
                    cities: state.editMasterState.cities,
                    master: {
                        name: state.editMasterState.master.name,
                        surname: state.editMasterState.master.surname,
                        rating: state.editMasterState.master.rating,
                        city: action.payload,
                        id: state.editMasterState.master.id
                    }
                }
            };
        ////////////////////////////////CITIES///////////////////////////////////////////////
        case ACTION_CITIES.ACTION_GET_CITIES:
            return {
                ...state, citiesState: {
                    cities: action.payload,
                }
            };
        ////////////////////////////////ADD_CITY///////////////////////////////////////////////
        case ADD_CITY_ACTION.ACTION_WRITE_NAME:
            return {
                ...state, addCityState: {
                    city: {
                        name: action.payload
                    }
                }
            };
    }
    return state;
}