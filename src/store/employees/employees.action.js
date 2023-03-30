import { createAction } from '../../utils/reducer/reducer.utils';
import { EMPLOYEES_ACTION_TYPES } from './employees.types';

export const setEmployees = (employees) =>
	createAction(EMPLOYEES_ACTION_TYPES.SET_EMPLOYEES, employees);
