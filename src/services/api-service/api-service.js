import {Md5} from 'ts-md5/dist/md5';
import axios from 'axios';
import {apiConfig} from './api-config'

import {lsService} from '../LS-service/ls-service'

export const apiService = {
    authentication: ({login, password}) => {
        return axios.post(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/login', {
            username: login,
            password: Md5.hashStr(password)
        })
    },
    checkToken: () => {
        return axios.get(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/protected/checktoken', {
            headers: {
                token: lsService.get()
            }
        })
    },

    getMasters: () => {
        return axios.get(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/protected/masters', {
            headers: {
                token: lsService.get()
            }
        })
    },

    getCities: () => {
        return axios.get(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/cities')
    },

    addMaster: ({name, surname, rating, city}) => {
        return axios.post(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/protected/masters', {
            token: lsService.get(),
            name: name,
            surname: surname,
            rating: rating,
            city: city
        })
    },

    editMaster: ({name, surname, rating, city, id}) => {
        return axios.put(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/protected/masters', {
                token: lsService.get(),
                id: id,
                name: name,
                surname: surname,
                rating: rating,
                city: city
            }
        )
    },

    delete: ({id, route}) => {
        return axios.delete(apiConfig.ROUTER_OPTIONS.Back_End_Url + `/protected/${route}`, {
            params: {
                id: id,
                route: route
            },
            headers: {
                token: lsService.get()
            }
        })
    },

    addCity: ({name}) => {
        return axios.post(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/protected/cities', {
            token: lsService.get(),
            newcity: name,
        })
    },

    editCity: ({name, id}) => {
        return axios.put(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/protected/cities', {
                token: lsService.get(),
                id: id,
                newcity: name,

            }
        )
    },

    getOrders: () => {
        return axios.get(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/protected/orders', {
            headers: {
                token: lsService.get()
            }
        })
    },

    getProducts: () => {
        return axios.get(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/product')
    },

    getFreeMasters: ({option, size, city, datetime}) => {
        console.log('getFreeMasters tic-tic');
        return axios.get(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/free-master', {
            params: {
                size: size,
                city: city,
                datetime: datetime,
                option: option
            }
        })
    },

    addOrder: ({name, email, city, product, size, master, datetime}) => {
        return axios.post(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/orders', {
            token: lsService.get(),
            client: name,
            email: email,
            size: size,
            product: product,
            city: city,
            master: master,
            datetime: datetime
        })
    },

    getClients: () => {
        return axios.get(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/protected/clients', {
            headers: {
                token: lsService.get()
            }
        })
    },

    editProduct: ({size, price, id}) => {

        return axios.put(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/protected/product', {
                token: lsService.get(),
                id: id,
                price: price,
                size: size

            }
        )
    },

    addProduct: ({size, price}) => {
        return axios.post(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/protected/product', {
            token: lsService.get(),
            size: size,
            price: price
        })
    },

    editClient: ({name, email, city_id, id}) => {
        return axios.put(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/protected/clients', {
                token: lsService.get(),
                id: id,
                name: name,
                email: email,
                city: city_id
            }
        )
    },

    deleteOrder: ({id, paypal_id, route}) => {
        return axios.delete(apiConfig.ROUTER_OPTIONS.Back_End_Url + `/protected/${route}`, {
            params: {
                id: id,
                paypal_id: paypal_id,
                route: route
            },
            headers: {
                token: lsService.get()
            }
        })
    },

    editOrder: ({order}) => {
        console.log('in edit order');
        return axios.put(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/protected/orders', {
                token: lsService.get(),
                id: order.id,
                client: order.client,
                email: order.email,
                size: order.size,
                price: String(order.price),
                city: order.city_id,
                idmaster: order.master_id,
                datetime: order.datetime,
                idclient: order.client_id,
                idproduct: order.product_id
            }
        )
    }
};
