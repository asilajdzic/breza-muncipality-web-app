import { EMPLOYEES_ACTION_TYPES } from './employees.types';

const EMPLOYEES_INITIAL_STATE = {
	employeesArray: [],
};

export const employeesReducer = (
	state = EMPLOYEES_INITIAL_STATE,
	action = {}
) => {
	const { type, payload } = action;

	switch (type) {
		case EMPLOYEES_ACTION_TYPES.SET_EMPLOYEES:
			return { ...state, employeesArray: payload };
		default:
			return state;
	}
};
