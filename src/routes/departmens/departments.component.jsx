import { useSelector } from 'react-redux';
import Department from '../../components/department/department.component';
import { selectEmployees } from '../../store/employees/employees.selector';

import { POSITION_TYPES } from '../../utils/positions/position-types';

import './departments.styles.scss';

const Departments = () => {
	const employees = useSelector(selectEmployees);
	const departmentsArray = employees.filter(
		(employees) => employees.category !== POSITION_TYPES.ELECTED
	);
	return (
		<div className='departments-container'>
			{departmentsArray.map((department, index) => (
				<Department department={department} key={index} />
			))}
		</div>
	);
};

export default Departments;
