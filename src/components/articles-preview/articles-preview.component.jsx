import { useState, useEffect } from 'react';

import { getCollection } from '../../utils/firebase/firebase.utils';

import ArticlePreview from '../article-preview/article-preview.component';

import './articles-preview.styles.scss';

const ArticlesPreview = () => {
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		getCollection('Articles').then((data) => {
			const articles = data;
			const sortedArticles = articles.sort(
				(a, b) => new Date(a.published) - new Date(b.published)
			);
			setArticles(sortedArticles);
		});
	}, []);
	return (
		<div className='articles-container'>
			<h1>Latest news</h1>
			{articles.map(
				(article, index) =>
					index < 7 && (
						<ArticlePreview article={article} key={index} index={index} />
					)
			)}
		</div>
	);
};

export default ArticlesPreview;
