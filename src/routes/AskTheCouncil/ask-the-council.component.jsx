import MessageForm from '../../components/message-form/message-form.component';
import InfoCard from '../../components/info-card/info-card.component';

import { ELECTED_POSITIONS } from '../../utils/positions/elected-positions';

import './ask-the-council.styles.scss';
import { useSelector } from 'react-redux';
import { selectEmployeesArray } from '../../store/employees/employees.selector';

const AskTheCouncil = () => {
	const employees = useSelector(selectEmployeesArray);
	const councillors = employees.filter(
		(employee) =>
			employee.jobTitle === ELECTED_POSITIONS.councillor_chairman ||
			employee.jobTitle === ELECTED_POSITIONS.councillor
	);
	return (
		<div className='ask-the-council-container'>
			<div className='councillers-container'>
				{councillors.map((councillor, index) => {
					return (
						<InfoCard
							text={Boolean(
								councillor.jobTitle === ELECTED_POSITIONS.councillor_chairman
							)}
							employee={councillor}
							key={index}
						/>
					);
				})}
			</div>
			<MessageForm />
		</div>
	);
};

export default AskTheCouncil;
