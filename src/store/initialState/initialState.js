import {mastersState} from "./mastersState";
import {addMasterState} from "./addMasterState";
import {editMasterState} from "./editMasterState";

import {citiesState} from "./citiesState";
import {addCityState} from "./addCityState";

import {ordersState} from "./ordersState";
import {addOrderState} from "./addOrderState";

import {clientsState} from "./clientsState";
import {editClientState} from "./editClientState";

import {productsState} from "./productsState";
import {editProductState} from "./editProductState";
import {addProductState} from "./addProductState";


export const initialState = {
    mastersState: mastersState,
    addMasterState: addMasterState,
    editMasterState: editMasterState,
    citiesState: citiesState,
    addCityState: addCityState,
    ordersState: ordersState,
    addOrderState: addOrderState,
    clientsState: clientsState,
    productsState: productsState,
    editProductState: editProductState,
    addProductState: addProductState,
    editClientState: editClientState
};