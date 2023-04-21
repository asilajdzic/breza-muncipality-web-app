import { useState, useEffect, Fragment } from 'react';

import { getCollection } from '../../utils/firebase/firebase.utils';

import ArticlePreview from '../article-preview/article-preview.component';
import Spinner from '../spinner/spinner.component';

import './articles-preview.styles.scss';

const ArticlesPreview = () => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const getArticles = async () => await getCollection('Articles');
		setIsLoading(true);
		getArticles().then((data) => {
			const articles = data;
			const sortedArticles = articles.sort(
				(a, b) => new Date(a.published) - new Date(b.published)
			);
			setArticles(sortedArticles);
		});
		setIsLoading(false);
	}, []);
	return (
		<Fragment>
			{isLoading ? (
				<Spinner />
			) : (
				<div className='articles-container'>
					<h1>Latest news</h1>
					{articles.map(
						(article, index) =>
							index < 7 && (
								<ArticlePreview article={article} key={index} index={index} />
							)
					)}
				</div>
			)}
		</Fragment>
	);
};

export default ArticlesPreview;
