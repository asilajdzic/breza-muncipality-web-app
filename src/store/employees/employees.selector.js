import { createSelector } from '@reduxjs/toolkit';

const selectEmployees = (state) => state.employees;

export const selectEmployeesArray = createSelector(
	[selectEmployees],
	(employeesSlice) => employeesSlice.employeesArray
);
