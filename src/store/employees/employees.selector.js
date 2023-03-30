import { createSelector } from '@reduxjs/toolkit';

const selectEmployeesReducer = (state) => state.employees;

export const selectEmployees = createSelector(
	[selectEmployeesReducer],
	(employeesSlice) => employeesSlice.employees
);
