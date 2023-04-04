import { combineReducers } from 'redux';

import { employeesReducer } from './employees/employees.reducer';

import { userReducer } from './user/user.reducer';

export const rootReducer = combineReducers({
	employees: employeesReducer,
	user: userReducer,
});
