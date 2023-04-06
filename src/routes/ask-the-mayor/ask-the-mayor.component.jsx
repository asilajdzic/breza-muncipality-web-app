import { useState, useEffect } from 'react';

import { getCollection } from '../../utils/firebase/firebase.utils';

import MessageForm from '../../components/message-form/message-form.component';
import InfoCard from '../../components/info-card/info-card.component';

import './ask-the-mayor.styles.scss';

const AskTheMayor = () => {
	const [mayor, setMayor] = useState(null);
	useEffect(() => {
		const getEmployees = async () => {
			return await getCollection('Elected Positions');
		};
		getEmployees().then((data) =>
			setMayor(data.find((employee) => employee.title === 'Mayor'))
		);
	}, []);
	return (
		<div className='ask-the-mayor-container'>
			{mayor && <InfoCard employee={mayor} text={true} />}
			<MessageForm collectionTitle='Mayor' />
		</div>
	);
};

export default AskTheMayor;
