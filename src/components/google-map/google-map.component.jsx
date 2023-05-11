import './google-map.styles.scss';

const GoogleMap = () => {
	return (
		<div className='map-container'>
			<iframe
				className='map'
				title='map'
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19300.56318123056!2d18.255199677490925!3d44.0204463596934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475f2c24c3379565%3A0x8abae5fe88d346e5!2sOp%C4%87ina%20Breza!5e0!3m2!1sbs!2sba!4v1683712322383!5m2!1sbs!2sba'
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
			></iframe>
		</div>
	);
};

export default GoogleMap;
