import InfoCard from '../info-card/info-card.component';
import './department.styles.scss';

const Department = ({ department }) => {
	const { category, employeesArray } = department;

	return (
		<div className='department-container'>
			<h1>{category}</h1>
			{employeesArray.map((employee, index) => (
				<InfoCard employee={employee} key={index} />
			))}
		</div>
	);
};

export default Department;
