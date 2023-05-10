import { useState, useEffect, Fragment } from 'react';

import { getCollection } from '../../utils/firebase/firebase.utils';

import ArticlePreview from '../article-preview/article-preview.component';
import Spinner from '../spinner/spinner.component';

import './articles-preview.styles.scss';

const ArticlesPreview = (noLimit = true) => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getArticles = async () => {
			setIsLoading(true);
			const data = await getCollection('Articles');
			const sortedData = data.sort(
				(a, b) => b.published.seconds - a.published.seconds
			);
			setArticles(sortedData);
			setIsLoading(false);
		};
		getArticles();
	}, []);
	return (
		<Fragment>
			{isLoading ? (
				<Spinner />
			) : (
				<Fragment>
					<div className='articles-preview-container'>
						{articles.map(
							(article, index) =>
								(noLimit || index < 8) && (
									<ArticlePreview article={article} key={index} />
								)
						)}
					</div>
				</Fragment>
			)}
		</Fragment>
	);
};

export default ArticlesPreview;
