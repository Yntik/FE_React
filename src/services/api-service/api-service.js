import {Md5} from 'ts-md5/dist/md5';
import axios from 'axios';
import {apiConfig} from './api-config'
import Auth from '../Auth0/Auth'
import {lsService} from '../LS-service/ls-service'

const auth = new Auth();


export const apiService = {
    checkToken: () => {
        const headers = { 'Authorization': `Bearer ${auth.getAccessToken()}`}
        return axios.get(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/protected/checktoken',{ headers})
    },

    getMasters: () => {
        const headers = { 'Authorization': `Bearer ${auth.getAccessToken()}`}
        return axios.get(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/protected/masters',{ headers})
    },

    getCities: () => {
        return axios.get(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/cities')
    },

    addMaster: ({name, surname, rating, city}) => {
        const headers = { 'Authorization': `Bearer ${auth.getAccessToken()}`}
        return axios.post(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/protected/masters', {
            name: name,
            surname: surname,
            rating: rating,
            city: city
        }, { headers })
    },

    editMaster: ({name, surname, rating, city, id}) => {
        const headers = { 'Authorization': `Bearer ${auth.getAccessToken()}`}
        return axios.put(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/protected/masters', {
                id: id,
                name: name,
                surname: surname,
                rating: rating,
                city: city
            }, { headers })
    },

    delete: ({id, route}) => {
        const headers = { 'Authorization': `Bearer ${auth.getAccessToken()}`}
        return axios.delete(apiConfig.ROUTER_OPTIONS.Back_End_Url + `/protected/${route}`, {
            params: {
                id: id,
                route: route
            },
            headers: headers
        })
    },

    addCity: ({name}) => {
        const headers = { 'Authorization': `Bearer ${auth.getAccessToken()}`}
        return axios.post(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/protected/cities', {
            newcity: name,
        },{ headers })
    },

    editCity: ({name, id}) => {
        const headers = { 'Authorization': `Bearer ${auth.getAccessToken()}`}
        return axios.put(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/protected/cities', {
                id: id,
                newcity: name,
            }, { headers })
    },

    getOrders: () => {
        const headers = { 'Authorization': `Bearer ${auth.getAccessToken()}`}
        return axios.get(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/protected/orders', { headers })
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
        const headers = { 'Authorization': `Bearer ${auth.getAccessToken()}`}
        return axios.post(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/orders', {
            client: name,
            email: email,
            size: size,
            product: product,
            city: city,
            master: master,
            datetime: datetime
        },{ headers })
    },

    getClients: () => {
        const headers = { 'Authorization': `Bearer ${auth.getAccessToken()}`}
        return axios.get(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/protected/clients', { headers })
    },

    editProduct: ({size, price, id}) => {
        const headers = { 'Authorization': `Bearer ${auth.getAccessToken()}`}
        return axios.put(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/protected/product', {
                id: id,
                price: price,
                size: size

            }, { headers })
    },

    addProduct: ({size, price}) => {
        const headers = { 'Authorization': `Bearer ${auth.getAccessToken()}`}
        return axios.post(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/protected/product', {
            size: size,
            price: price
        }, { headers })
    },

    editClient: ({name, email, city_id, id}) => {
        const headers = { 'Authorization': `Bearer ${auth.getAccessToken()}`}
        return axios.put(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/protected/clients', {
                id: id,
                name: name,
                email: email,
                city: city_id
            }, { headers })
    },

    deleteOrder: ({id, paypal_id, route}) => {
        const headers = { 'Authorization': `Bearer ${auth.getAccessToken()}`}
        return axios.delete(apiConfig.ROUTER_OPTIONS.Back_End_Url + `/protected/${route}`, {
            params: {
                id: id,
                paypal_id: paypal_id,
                route: route
            },
            headers: headers
        })
    },

    editOrder: ({order}) => {
        console.log('in edit order');
        const headers = { 'Authorization': `Bearer ${auth.getAccessToken()}`}
        return axios.put(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/protected/orders', {
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
            }, { headers })
    }
};
