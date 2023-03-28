import './info-card.styles.scss';

const InfoCard = ({ employee, text = 'true' }) => {
	return (
		<div className='info-card-container'>
			<img
				src={employee.image}
				alt='Error loading resources'
				className='portrait'
			/>
			{text ? (
				<p className='information-text'>
					In order to promote and develop civic participation in decision-making
					processes, a two-way communication with the {employee.title}{' '}
					{employee.name} was enabled through the website of the local
					self-government unit. Only those communities in which citizens are
					well informed and actively involved in decision-making processes can
					be considered open and democratic human communities.
				</p>
			) : (
				<p className='basic-info'>
					Name: {employee.name} <br /> Position: {employee.title} <br /> Email:{' '}
					{employee.email}
				</p>
			)}
		</div>
	);
};

export default InfoCard;
