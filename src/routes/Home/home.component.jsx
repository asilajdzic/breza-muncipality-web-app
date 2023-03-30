import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import FunctionalityCard from '../../components/functionality-card/functionality-card.component';
import ImageSlider from '../../components/image-slider/image-slider.component';

import './home.styles.scss';

export const FUNCTIONALITIES = [
	{
		id: 0,
		name: 'Ask the Mayor',
		path: '/ask-the-mayor',
	},
	{
		id: 1,
		name: 'Ask the Council',
		path: '/ask-the-council',
	},
	{ id: 2, name: 'E-forms', path: '/e-forms' },
	{
		id: 3,
		name: 'Report Corruption',
		path: '/report-corruption',
	},
];

const Home = () => {
	return (
		<Fragment>
			<div className='home-container'>
				<div className='image-container'>
					<ImageSlider />
				</div>
				<div className='funcs-container'>
					{FUNCTIONALITIES.map((func) => (
						<FunctionalityCard
							key={func.id}
							name={func.name}
							path={func.path}
						/>
					))}
				</div>
				<div className='news-container'></div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Home;
