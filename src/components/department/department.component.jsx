import { useState, useEffect } from 'react';

import { getCollection } from '../../utils/firebase/firebase.utils';

import InfoCard from '../info-card/info-card.component';

import './department.styles.scss';

const Department = ({ department }) => {
	const [departmentArray, setDepartmentArray] = useState([]);
	useEffect(() => {
		const getDepartmentEmployees = async () => await getCollection(department);
		getDepartmentEmployees().then((data) => setDepartmentArray(data));
		// eslint-disable-next-line
	}, []);
	return (
		<div className='department-container'>
			<h1>{department}</h1>
			{departmentArray.map((employee, index) => (
				<InfoCard employee={employee} key={index} />
			))}
		</div>
	);
};

export default Department;
