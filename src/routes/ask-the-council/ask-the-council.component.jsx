import { useState, useEffect } from 'react';

import { getCollection } from '../../utils/firebase/firebase.utils';

import MessageForm from '../../components/message-form/message-form.component';
import InfoCard from '../../components/info-card/info-card.component';

import './ask-the-council.styles.scss';

const AskTheCouncil = () => {
	const [employees, setEmployees] = useState([]);
	useEffect(() => {
		const getEmployees = async () => {
			return await getCollection('Elected Positions');
		};
		getEmployees().then((data) => setEmployees(data));
	}, []);
	const chairman = employees.find(
		(employee) => employee.title === 'Council Chairman'
	);
	return (
		<div className='ask-the-council-container'>
			{chairman && <InfoCard employee={chairman} text={true} />}
			<MessageForm collectionTitle={'Council'} />
			{employees
				.filter((employee) => employee.title === 'Councilor')
				.map((councilor) => (
					<InfoCard employee={councilor} />
				))}
		</div>
	);
};

export default AskTheCouncil;
