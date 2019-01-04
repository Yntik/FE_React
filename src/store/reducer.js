import {initialState} from "./initialState/initialState";

import {MASTERS_ACTION} from "./action/MASTERS_ACTION";
import {ADD_MASTER_ACTION} from "./action/ADD_MASTER_ACTION";
import {EDIT_MASTER_ACTION} from "./action/EDIT_MASTER_ACTION";

import {ACTION_CITIES} from "./action/CITIES_ACTION";
import {ADD_CITY_ACTION} from "./action/ADD_CITY_ACTION";

import {ORDERS_ACTION} from "./action/ORDERS_ACTION";
import {ADD_ORDER_ACTION} from "./action/ADD_ORDER_ACTION";
import {EDIT_ORDER_ACTION} from "./action/EDIT_ORDER_ACTION";

import {CLIENTS_ACTION} from "./action/CLIENTS_ACTION";
import {EDIT_CLIENT_ACTION} from "./action/EDIT_CLIENT_ACTION";

import {PRODUCTS_ACTION} from "./action/PRODUCTS_ACTION";
import {EDIT_PRODUCT_ACTION} from "./action/EDIT_PRODUCT_ACTION";
import {ADD_PRODUCT_ACTION} from "./action/ADD_PRODUCT_ACTION";


export const reducer = (state = initialState, action) => {
    var copy ;
    switch (action.type) {
        ////////////////////////////////MASTERS///////////////////////////////////////////////
        case MASTERS_ACTION.ACTION_GET_MASTERS:
            copy = {...state.mastersState} ;
            copy.masters = action.payload;
            return {
                ...state, mastersState: copy
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
        ////////////////////////////////ORDERS///////////////////////////////////////////////
        case ORDERS_ACTION.ACTION_GET_ORDERS:
            return {
                ...state, ordersState: {
                    orders: action.payload
                }
            };
        ////////////////////////////////ADD_ORDERS///////////////////////////////////////////////
        case ADD_ORDER_ACTION.ACTION_CHOOSE_DATETIME:

            return {
                ...state, addOrderState: {
                    order: {
                        name: state.addOrderState.order.name,
                        email: state.addOrderState.order.email,
                        product: state.addOrderState.order.product,
                        city: state.addOrderState.order.city,
                        datetime: action.payload,
                        master: state.addOrderState.order.master,
                        size: state.addOrderState.order.size
                    },
                    products: state.addOrderState.products,
                    cities: state.addOrderState.cities,
                    masters: state.addOrderState.masters

                }
            };
        case ADD_ORDER_ACTION.ACTION_CHOOSE_CITY:
            return {
                ...state, addOrderState: {
                    order: {
                        name: state.addOrderState.order.name,
                        email: state.addOrderState.order.email,
                        product: state.addOrderState.order.product,
                        city: action.payload,
                        datetime: state.addOrderState.order.datetime,
                        master: state.addOrderState.order.master,
                        size: state.addOrderState.order.size
                    },
                    products: state.addOrderState.products,
                    cities: state.addOrderState.cities,
                    masters: state.addOrderState.masters

                }
            };
        case ADD_ORDER_ACTION.ACTION_CHOOSE_MASTER:
            return {
                ...state, addOrderState: {
                    order: {
                        name: state.addOrderState.order.name,
                        email: state.addOrderState.order.email,
                        product: state.addOrderState.order.product,
                        city: state.addOrderState.order.city,
                        datetime: state.addOrderState.order.datetime,
                        master: action.payload,
                        size: state.addOrderState.order.size
                    },
                    products: state.addOrderState.products,
                    cities: state.addOrderState.cities,
                    masters: state.addOrderState.masters

                }
            };
        case ADD_ORDER_ACTION.ACTION_CHOOSE_PRODUCT:
            return {
                ...state, addOrderState: {
                    order: {
                        name: state.addOrderState.order.name,
                        email: state.addOrderState.order.email,
                        product: action.payload,
                        city: state.addOrderState.order.city,
                        datetime: state.addOrderState.order.datetime,
                        master: state.addOrderState.order.master,
                        size: state.addOrderState.order.size
                    },
                    products: state.addOrderState.products,
                    cities: state.addOrderState.cities,
                    masters: state.addOrderState.masters

                }
            };
        case ADD_ORDER_ACTION.ACTION_GET_CITIES:
            return {
                ...state, addOrderState: {
                    order: {
                        name: state.addOrderState.order.name,
                        email: state.addOrderState.order.email,
                        product: state.addOrderState.order.product,
                        city: state.addOrderState.order.city,
                        datetime: state.addOrderState.order.datetime,
                        master: state.addOrderState.order.master,
                        size: state.addOrderState.order.size
                    },
                    products: state.addOrderState.products,
                    cities: action.payload,
                    masters: state.addOrderState.masters

                }
            };
        case ADD_ORDER_ACTION.ACTION_GET_MASTERS:
            return {
                ...state, addOrderState: {
                    order: {
                        name: state.addOrderState.order.name,
                        email: state.addOrderState.order.email,
                        product: state.addOrderState.order.product,
                        city: state.addOrderState.order.city,
                        datetime: state.addOrderState.order.datetime,
                        master: state.addOrderState.order.master,
                        size: state.addOrderState.order.size
                    },
                    products: state.addOrderState.products,
                    cities: state.addOrderState.cities,
                    masters: action.payload

                }
            };
        case ADD_ORDER_ACTION.ACTION_GET_PRODUCTS:
            return {
                ...state, addOrderState: {
                    order: {
                        name: state.addOrderState.order.name,
                        email: state.addOrderState.order.email,
                        product: state.addOrderState.order.product,
                        city: state.addOrderState.order.city,
                        datetime: state.addOrderState.order.datetime,
                        master: state.addOrderState.order.master,
                        size: state.addOrderState.order.size
                    },
                    products: action.payload,
                    cities: state.addOrderState.cities,
                    masters: state.addOrderState.masters

                }
            };
        case ADD_ORDER_ACTION.ACTION_WRITE_EMAIL:
            return {
                ...state, addOrderState: {
                    order: {
                        name: state.addOrderState.order.name,
                        email: action.payload,
                        product: state.addOrderState.order.product,
                        city: state.addOrderState.order.city,
                        datetime: state.addOrderState.order.datetime,
                        master: state.addOrderState.order.master,
                        size: state.addOrderState.order.size
                    },
                    products: state.addOrderState.products,
                    cities: state.addOrderState.cities,
                    masters: state.addOrderState.masters
                }
            };
        case ADD_ORDER_ACTION.ACTION_WRITE_NAME:
            return {
                ...state, addOrderState: {
                    order: {
                        name: action.payload,
                        email: state.addOrderState.order.email,
                        product: state.addOrderState.order.product,
                        city: state.addOrderState.order.city,
                        datetime: state.addOrderState.order.datetime,
                        master: state.addOrderState.order.master,
                        size: state.addOrderState.order.size
                    },
                    products: state.addOrderState.products,
                    cities: state.addOrderState.cities,
                    masters: state.addOrderState.masters
                }
            };
        case ADD_ORDER_ACTION.ACTION_CHOOSE_SIZE:
            return {
                ...state, addOrderState: {
                    order: {
                        name: state.addOrderState.order.name,
                        email: state.addOrderState.order.email,
                        product: state.addOrderState.order.product,
                        city: state.addOrderState.order.city,
                        datetime: state.addOrderState.order.datetime,
                        master: state.addOrderState.order.master,
                        size: action.payload
                    },
                    products: state.addOrderState.products,
                    cities: state.addOrderState.cities,
                    masters: state.addOrderState.masters
                }
            };
        ////////////////////////////////CLIENTS///////////////////////////////////////////////
        case CLIENTS_ACTION.ACTION_GET_CLIENTS:
            return {
                ...state, clientsState: {
                    clients: action.payload
                }
            };
        ////////////////////////////////PRODUCTS///////////////////////////////////////////////
        case PRODUCTS_ACTION.ACTION_GET_PRODUCTS:
            return {
                ...state, productsState: {
                    products: action.payload
                }
            };
        ////////////////////////////////EDIT_PRODUCT///////////////////////////////////////////////
        case EDIT_PRODUCT_ACTION.ACTION_WRITE_PRICE:
            return {
                ...state, editProductState: {
                    size: state.editProductState.size,
                    price: action.payload
                }
            };
        case EDIT_PRODUCT_ACTION.ACTION_WRITE_SIZE:
            return {
                ...state, editProductState: {
                    size: action.payload,
                    price: state.editProductState.price
                }
            };
        ////////////////////////////////ADD_PRODUCT///////////////////////////////////////////////
        case ADD_PRODUCT_ACTION.ACTION_WRITE_PRICE:
            return {
                ...state, addProductState: {
                    size: state.addProductState.size,
                    price: action.payload
                }
            };
        case ADD_PRODUCT_ACTION.ACTION_WRITE_SIZE:
            return {
                ...state, addProductState: {
                    size: action.payload,
                    price: state.addProductState.price
                }
            };
        ////////////////////////////////EDIT_CLIENT////////////////////////////////////////////
        case EDIT_CLIENT_ACTION.ACTION_ON_EDIT_CLIENT:
            return {
                ...state, editClientState: {
                    cities: state.editClientState.cities,
                    client: action.payload
                }
            };
        case EDIT_CLIENT_ACTION.ACTION_GET_CITIES:
            return {
                ...state, editClientState: {
                    cities: action.payload,
                    client: {
                        name: state.editClientState.client.name,
                        email: state.editClientState.client.email,
                        city_id: state.editClientState.client.city_id,
                        id: state.editClientState.client.id
                    }
                }
            };
        case EDIT_CLIENT_ACTION.ACTION_WRITE_NAME:
            return {
                ...state, editClientState: {
                    cities: state.editClientState.cities,
                    client: {
                        name: action.payload,
                        email: state.editClientState.client.email,
                        city_id: state.editClientState.client.city_id,
                        id: state.editClientState.client.id
                    }
                }
            };
        case EDIT_CLIENT_ACTION.ACTION_WRITE_EMAIL:
            return {
                ...state, editClientState: {
                    cities: state.editClientState.cities,
                    client: {
                        name: state.editClientState.client.name,
                        email: action.payload,
                        city_id: state.editClientState.client.city_id,
                        id: state.editClientState.client.id
                    }
                }
            };
        case EDIT_CLIENT_ACTION.ACTION_CHOOSE_CITY:
            return {
                ...state, editClientState: {
                    cities: state.editClientState.cities,
                    client: {
                        name: state.editClientState.client.name,
                        email: state.editClientState.client.email,
                        city_id: action.payload,
                        id: state.editClientState.client.id
                    }
                }
            };
        ////////////////////////////////EDIT_ORDERS///////////////////////////////////////////////
        case EDIT_ORDER_ACTION.ACTION_ON_EDIT_ORDER:

            return {
                ...state, editOrderState: {
                    order: action.payload,
                    cities: state.editOrderState.cities,
                    products: state.editOrderState.products,
                    masters: state.editOrderState.masters

                }
            };
        case EDIT_ORDER_ACTION.ACTION_GET_CITIES:

            return {
                ...state, editOrderState: {
                    order: state.editOrderState.order,
                    cities: action.payload,
                    products: state.editOrderState.products,
                    masters: state.editOrderState.masters

                }
            };
        case EDIT_ORDER_ACTION.ACTION_GET_PRODUCTS:

            return {
                ...state, editOrderState: {
                    order: state.editOrderState.order,
                    cities: state.editOrderState.cities,
                    products: action.payload,
                    masters: state.editOrderState.masters

                }
            };
        case EDIT_ORDER_ACTION.ACTION_GET_MASTERS:

            return {
                ...state, editOrderState: {
                    order: state.editOrderState.order,
                    cities: state.editOrderState.cities,
                    products: state.editOrderState.products,
                    masters: action.payload

                }
            };
        case EDIT_ORDER_ACTION.ACTION_WRITE_CLIENT:

            return {
                ...state, editOrderState: {
                    order: {
                        id: state.editOrderState.order.id,
                        client: action.payload,
                        email: state.editOrderState.order.email,
                        price: state.editOrderState.order.price,
                        size: state.editOrderState.order.size,
                        datetime: state.editOrderState.order.datetime,
                        city_id: state.editOrderState.order.city_id,
                        master_id: state.editOrderState.order.master_id,
                        client_id: state.editOrderState.order.client_id,
                        product_id: state.editOrderState.order.product_id
                    },
                    products: state.editOrderState.products,
                    cities: state.editOrderState.cities,
                    masters: state.editOrderState.masters

                }
            };
        case EDIT_ORDER_ACTION.ACTION_WRITE_EMAIL:

            return {
                ...state, editOrderState: {
                    order: {
                        id: state.editOrderState.order.id,
                        client: state.editOrderState.order.client,
                        email: action.payload,
                        price: state.editOrderState.order.price,
                        size: state.editOrderState.order.size,
                        datetime: state.editOrderState.order.datetime,
                        city_id: state.editOrderState.order.city_id,
                        master_id: state.editOrderState.order.master_id,
                        client_id: state.editOrderState.order.client_id,
                        product_id: state.editOrderState.order.product_id
                    },
                    products: state.editOrderState.products,
                    cities: state.editOrderState.cities,
                    masters: state.editOrderState.masters

                }
            };
        case EDIT_ORDER_ACTION.ACTION_CHOOSE_PRICE:

            return {
                ...state, editOrderState: {
                    order: {
                        id: state.editOrderState.order.id,
                        client: state.editOrderState.order.client,
                        email: state.editOrderState.order.email,
                        price: action.payload,
                        size: state.editOrderState.order.size,
                        datetime: state.editOrderState.order.datetime,
                        city_id: state.editOrderState.order.city_id,
                        master_id: state.editOrderState.order.master_id,
                        client_id: state.editOrderState.order.client_id,
                        product_id: state.editOrderState.order.product_id
                    },
                    products: state.editOrderState.products,
                    cities: state.editOrderState.cities,
                    masters: state.editOrderState.masters

                }
            };
        case EDIT_ORDER_ACTION.ACTION_CHOOSE_SIZE:

            return {
                ...state, editOrderState: {
                    order: {
                        id: state.editOrderState.order.id,
                        client: state.editOrderState.order.client,
                        email: state.editOrderState.order.email,
                        price: state.editOrderState.order.price,
                        size: action.payload,
                        datetime: state.editOrderState.order.datetime,
                        city_id: state.editOrderState.order.city_id,
                        master_id: state.editOrderState.order.master_id,
                        client_id: state.editOrderState.order.client_id,
                        product_id: state.editOrderState.order.product_id
                    },
                    products: state.editOrderState.products,
                    cities: state.editOrderState.cities,
                    masters: state.editOrderState.masters

                }
            };
        case EDIT_ORDER_ACTION.ACTION_CHOOSE_DATETIME:

            return {
                ...state, editOrderState: {
                    order: {
                        id: state.editOrderState.order.id,
                        client: state.editOrderState.order.client,
                        email: state.editOrderState.order.email,
                        price: state.editOrderState.order.price,
                        size: state.editOrderState.order.size,
                        datetime: action.payload,
                        city_id: state.editOrderState.order.city_id,
                        master_id: state.editOrderState.order.master_id,
                        client_id: state.editOrderState.order.client_id,
                        product_id: state.editOrderState.order.product_id
                    },
                    products: state.editOrderState.products,
                    cities: state.editOrderState.cities,
                    masters: state.editOrderState.masters

                }
            };
        case EDIT_ORDER_ACTION.ACTION_CHOOSE_CITY_ID:

            return {
                ...state, editOrderState: {
                    order: {
                        id: state.editOrderState.order.id,
                        client: state.editOrderState.order.client,
                        email: state.editOrderState.order.email,
                        price: state.editOrderState.order.price,
                        size: state.editOrderState.order.size,
                        datetime: state.editOrderState.order.datetime,
                        city_id: action.payload,
                        master_id: state.editOrderState.order.master_id,
                        client_id: state.editOrderState.order.client_id,
                        product_id: state.editOrderState.order.product_id
                    },
                    products: state.editOrderState.products,
                    cities: state.editOrderState.cities,
                    masters: state.editOrderState.masters

                }
            };
        case EDIT_ORDER_ACTION.ACTION_CHOOSE_MASTER_ID:

            return {
                ...state, editOrderState: {
                    order: {
                        id: state.editOrderState.order.id,
                        client: state.editOrderState.order.client,
                        email: state.editOrderState.order.email,
                        price: state.editOrderState.order.price,
                        size: state.editOrderState.order.size,
                        datetime: state.editOrderState.order.datetime,
                        city_id: state.editOrderState.order.city_id,
                        master_id: action.payload,
                        client_id: state.editOrderState.order.client_id,
                        product_id: state.editOrderState.order.product_id
                    },
                    products: state.editOrderState.products,
                    cities: state.editOrderState.cities,
                    masters: state.editOrderState.masters

                }
            };
        case EDIT_ORDER_ACTION.ACTION_CHOOSE_PRODUCT_ID:

            return {
                ...state, editOrderState: {
                    order: {
                        id: state.editOrderState.order.id,
                        client: state.editOrderState.order.client,
                        email: state.editOrderState.order.email,
                        price: state.editOrderState.order.price,
                        size: state.editOrderState.order.size,
                        datetime: state.editOrderState.order.datetime,
                        city_id: state.editOrderState.order.city_id,
                        master_id: state.editOrderState.order.master_id,
                        client_id: state.editOrderState.order.client_id,
                        product_id: action.payload
                    },
                    products: state.editOrderState.products,
                    cities: state.editOrderState.cities,
                    masters: state.editOrderState.masters

                }
            };

    }
    return state;
}