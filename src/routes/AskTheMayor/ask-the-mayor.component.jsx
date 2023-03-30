import { useSelector } from 'react-redux';

import { selectEmployeesArray } from '../../store/employees/employees.selector';

import { ELECTED_POSITIONS } from '../../utils/positions/elected-positions';

import MessageForm from '../../components/message-form/message-form.component';
import InfoCard from '../../components/info-card/info-card.component';

import './ask-the-mayor.styles.scss';

const AskTheMayor = () => {
	const employees = useSelector(selectEmployeesArray);

	const mayor = employees.find(
		(employee) => employee.jobTitle === ELECTED_POSITIONS.mayor
	);
	console.log(mayor);
	return (
		<div className='ask-the-mayor-container'>
			<InfoCard employee={mayor} />
			<MessageForm />
		</div>
	);
};

export default AskTheMayor;
