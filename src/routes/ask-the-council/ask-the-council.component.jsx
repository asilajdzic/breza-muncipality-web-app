import MessageForm from '../../components/message-form/message-form.component';
import InfoCard from '../../components/info-card/info-card.component';

import { ELECTED_POSITIONS } from '../../utils/positions/elected-positions';
import { POSITION_TYPES } from '../../utils/positions/position-types';

import './ask-the-council.styles.scss';
import { useSelector } from 'react-redux';
import { selectEmployees } from '../../store/employees/employees.selector';

const AskTheCouncil = () => {
	const employees = useSelector(selectEmployees);
	const electedEmployees = employees.find(
		(collection) => collection.category === POSITION_TYPES.ELECTED
	).employeesArray;
	const chairman = electedEmployees.find(
		(councillor) => councillor.title === ELECTED_POSITIONS.COUNCILLOR_CHAIRMAN
	);
	const councillors = electedEmployees.filter(
		(councillor) => councillor.title === ELECTED_POSITIONS.COUNCILLOR
	);
	return (
		<div className='ask-the-council-container'>
			<InfoCard employee={chairman} text={true} />
			<MessageForm collectionTitle={'Council'} />
			{councillors.map((councillor, index) => {
				return <InfoCard employee={councillor} key={index} />;
			})}
		</div>
	);
};

export default AskTheCouncil;
