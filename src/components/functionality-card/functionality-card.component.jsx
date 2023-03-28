import { Link } from 'react-router-dom';

import './functionality-card.styles.scss';

const FunctionalityCard = ({ name, path }) => {
	return (
		<Link to={path} className='functionality-card'>
			{name}
		</Link>
	);
};

export default FunctionalityCard;
