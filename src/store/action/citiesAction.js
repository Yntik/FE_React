import {ACTION_CITIES} from './CITIES_ACTION';


export const getCities = (cities) => {
	return {
		type: ACTION_CITIES.ACTION_GET_CITIES,
		payload: cities
	};
};