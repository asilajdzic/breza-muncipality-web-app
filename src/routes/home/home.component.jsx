import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import { FUNCTIONALITIES_DATA } from '../../utils/data/functionalities.data';

import ArticlesPreview from '../../components/articles-preview/articles-preview.component';
import FunctionalityCard from '../../components/functionality-card/functionality-card.component';
import GoogleMap from '../../components/google-map/google-map.component';
import ImageSlider from '../../components/image-slider/image-slider.component';

import './home.styles.scss';

const Home = () => {
	return (
		<Fragment>
			<div className='home-container'>
				<div className='image-container'>
					<ImageSlider />
				</div>
				<div className='funcs-container'>
					{FUNCTIONALITIES_DATA.map((func) => (
						<FunctionalityCard
							key={func.id}
							name={func.name}
							path={func.path}
						/>
					))}
				</div>
				<ArticlesPreview />
				<GoogleMap />
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Home;
