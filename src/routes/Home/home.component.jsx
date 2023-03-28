import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import FunctionalityCard from '../../components/functionality-card/functionality-card.component';

import './home.styles.scss';

const FUNCTIONALITIES = [
	{ id: 0, name: 'Ask the Chief' },
	{ id: 1, name: 'Ask the Council' },
	{ id: 2, name: 'E-forms' },
	{ id: 3, name: 'Report Corruption' },
];

const Home = () => {
	return (
		<Fragment>
			<div className='home-container'>
				<div className='picture-container'>Image</div>
				<div className='funcs-container'>
					{FUNCTIONALITIES.map((func) => (
						<FunctionalityCard key={func.id} name={func.name} />
					))}
				</div>
				<div className='news-container'></div>
				<footer></footer>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Home;
