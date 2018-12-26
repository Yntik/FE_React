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
    }
};
