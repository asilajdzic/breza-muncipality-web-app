import { Link } from 'react-router-dom';

import './shortcut-card.styles.scss';

const ShortcutCard = ({ name, path }) => {
	return (
		<Link to={path} className='shortcut-card'>
			{name}
		</Link>
	);
};

export default ShortcutCard;
