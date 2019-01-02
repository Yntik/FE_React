import {mastersState} from "./mastersState";
import {addMasterState} from "./addMasterState";
import {editMasterState} from "./editMasterState";

import {citiesState} from "./citiesState";
import {addCityState} from "./addCityState";

import {ordersState} from "./ordersState";
import {addOrderState} from "./addOrderState";

export const initialState = {
    mastersState: mastersState,
    addMasterState: addMasterState,
    editMasterState: editMasterState,
    citiesState: citiesState,
    addCityState: addCityState,
    ordersState: ordersState,
    addOrderState: addOrderState
};