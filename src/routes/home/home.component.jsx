import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import ArticlesPreview from '../../components/articles-preview/articles-preview.component';
import GoogleMap from '../../components/google-map/google-map.component';
import Shortcuts from '../../components/shortcuts/shortcuts.component';
import ImageSlider from '../../components/image-slider/image-slider.component';

import './home.styles.scss';

const Home = () => {
	return (
		<Fragment>
			<div className='home-container'>
				<ImageSlider />
				<Shortcuts />
				<h1>Latest news</h1>
				<ArticlesPreview noLimit={false} />
				<GoogleMap />
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Home;
