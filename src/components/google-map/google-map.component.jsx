import './google-map.styles.scss';

const GoogleMap = () => {
	return (
		<div className='map-container'>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91812.44998604251!2d18.22231550492553!3d44.01852075647173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475f2c5c2c1ba723%3A0x39ca12d2b4060d9a!2sBreza!5e0!3m2!1sbs!2sba!4v1680457647231!5m2!1sbs!2sba'
				width='600'
				height='450'
				allowFullScreen=''
				loading='lazy'
				title='map'
				referrerPolicy='no-referrer-when-downgrade'
			></iframe>
		</div>
	);
};

export default GoogleMap;
