import { DEPARTMENTS_DATA } from '../../utils/data/departments.data';

import Department from '../../components/department/department.component';

import './departments.styles.scss';

const Departments = () => {
	return (
		<div className='departments-container'>
			{DEPARTMENTS_DATA.map((department, index) => (
				<Department key={index} department={department} />
			))}
		</div>
	);
};

export default Departments;
