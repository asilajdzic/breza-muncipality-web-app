import { useState, useEffect } from 'react';

import { getCollection } from '../../utils/firebase/firebase.utils';

import InfoCard from '../info-card/info-card.component';
import Spinner from '../spinner/spinner.component';

import './department.styles.scss';

const Department = ({ department }) => {
	const [departmentArray, setDepartmentArray] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getDepartmentEmployees = async () => await getCollection(department);
		setIsLoading(true);
		getDepartmentEmployees().then((data) => setDepartmentArray(data));
		setIsLoading(false);
		// eslint-disable-next-line
	}, []);
	return (
		<div className='department-container'>
			<h1>{department}</h1>
			{isLoading ? (
				<Spinner />
			) : (
				departmentArray.map((employee, index) => (
					<InfoCard employee={employee} key={index} />
				))
			)}
		</div>
	);
};

export default Department;
