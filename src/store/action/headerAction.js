import {HEADER_ACTION} from './HEADER_ACTION';


export const ChangePosition = (position) => {
	return {
		type: HEADER_ACTION.ACTION_CHANGE_POSITION,
		payload: position
	};
};