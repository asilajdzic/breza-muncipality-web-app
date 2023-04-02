import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import ArticlePreview from '../../components/article-preview/article-preview.component';

import FunctionalityCard from '../../components/functionality-card/functionality-card.component';
import ImageSlider from '../../components/image-slider/image-slider.component';

import './home.styles.scss';

const FUNCTIONALITIES = [
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

const ARTICLES = [
	{
		title: 'Article Title',
		imageUrl: 'image url',
		text: 'article text',
	},
	{
		title: 'Article Title',
		imageUrl: 'image url',
		text: 'article text',
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
				<div className='articles-container'>
					{ARTICLES.map((article) => (
						<ArticlePreview article={article} />
					))}
				</div>
				<div className='map-container'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91812.44998604251!2d18.22231550492553!3d44.01852075647173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475f2c5c2c1ba723%3A0x39ca12d2b4060d9a!2sBreza!5e0!3m2!1sbs!2sba!4v1680457647231!5m2!1sbs!2sba'
						width='600'
						height='450'
						allowfullscreen=''
						loading='lazy'
						title='map'
						referrerpolicy='no-referrer-when-downgrade'
					></iframe>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Home;
