import { createAction } from '../../utils/reducer/reducer.utils';
import { EMPLOYEES_ACTION_TYPES } from './employees.types';

export const setEmployees = (employeesArray) =>
	createAction(EMPLOYEES_ACTION_TYPES.SET_EMPLOYEES, employeesArray);
