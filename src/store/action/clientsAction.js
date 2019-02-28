import {CLIENTS_ACTION} from './CLIENTS_ACTION';

export const getClients = (clients) => {
	return {
		type: CLIENTS_ACTION.ACTION_GET_CLIENTS,
		payload: clients
	};
};