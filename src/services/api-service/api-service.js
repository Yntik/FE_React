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

    getFreeMasters: ({size, city, datetime}) => {
        return axios.get(apiConfig.ROUTER_OPTIONS.Back_End_Url + '/free-master',{
            params: {
                size: size,
                city: city,
                datetime: datetime,
                option: 'new'
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
    }
};
