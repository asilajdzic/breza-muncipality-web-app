import { useSelector } from 'react-redux';

import { selectEmployees } from '../../store/employees/employees.selector';

import { ELECTED_POSITIONS } from '../../utils/positions/elected-positions';
import { POSITION_TYPES } from '../../utils/positions/position-types';

import MessageForm from '../../components/message-form/message-form.component';
import InfoCard from '../../components/info-card/info-card.component';

import './ask-the-mayor.styles.scss';

const AskTheMayor = () => {
	const employees = useSelector(selectEmployees);
	const mayor = employees
		.find((collection) => collection.category === POSITION_TYPES.ELECTED)
		.employeesArray.find(
			(employee) => employee.title === ELECTED_POSITIONS.MAYOR
		);
	return (
		<div className='ask-the-mayor-container'>
			<InfoCard employee={mayor} text={true} />
			<MessageForm collectionTitle='Mayor' />
		</div>
	);
};

export default AskTheMayor;
