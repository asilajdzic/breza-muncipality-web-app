import './ask-the-mayor.styles.scss';

import MessageForm from '../../components/message-form/message-form.component';
import InfoCard from '../../components/info-card/info-card.component';

const mayor = {
	name: 'Name Surname',
	title: 'Municipal Mayor',
	image: 'https://i.ibb.co/WDqJ93M/portrait.jpg',
	email: 'email',
};

const AskTheMayor = () => {
	return (
		<div className='ask-the-mayor-container'>
			<InfoCard employee={mayor} />
			<MessageForm />
		</div>
	);
};

export default AskTheMayor;
