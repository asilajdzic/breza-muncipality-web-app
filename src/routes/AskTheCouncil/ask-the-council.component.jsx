import MessageForm from '../../components/message-form/message-form.component';
import InfoCard from '../../components/info-card/info-card.component';

import './ask-the-council.styles.scss';

const councillors = [
	{
		name: 'Name1 Surname1',
		title: 'Councillor Chairman',
		image: 'https://i.ibb.co/WDqJ93M/portrait.jpg',
		email: 'email',
	},
	{
		name: 'Name2 Surname2',
		title: 'Councillor',
		image: 'https://i.ibb.co/WDqJ93M/portrait.jpg',
		email: 'email',
	},
	{
		name: 'Name3 Surname3',
		title: 'Councillor',
		image: 'https://i.ibb.co/WDqJ93M/portrait.jpg',
		email: 'email',
	},
];

const AskTheCouncil = () => {
	return (
		<div className='ask-the-council-container'>
			<div className='councillers-container'>
				{councillors.map((councillor, index) => {
					return (
						<InfoCard
							text={Boolean(councillor.title === 'Councillor Chairman')}
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
