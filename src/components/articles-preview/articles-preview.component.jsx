import ArticlePreview from '../article-preview/article-preview.component';

import './articles-preview.styles.scss';

const ARTICLES = [
	{
		title: 'Article Title',
		imageUrl: 'https://i.ibb.co/WDqJ93M/portrait.jpg',
		text: 'article text',
	},
	{
		title: 'Article Title',
		imageUrl: 'https://i.ibb.co/WDqJ93M/portrait.jpg',
		text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque dolorum, placeat magnam cumque ut alias accusantium maiores repudiandae cupiditate natus, iusto eum aperiam perferendis tenetur accusamus. Vitae officia cupiditate sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quae autem fuga illo exercitationem veniam inventore, corporis excepturi amet nemo accusamus? Non sed laboriosam inventore reiciendis architecto quae, enim culpa?',
	},
	{
		title: 'Article Title',
		imageUrl: 'https://i.ibb.co/WDqJ93M/portrait.jpg',
		text: 'article text',
	},
	{
		title: 'Article Title',
		imageUrl: 'https://i.ibb.co/WDqJ93M/portrait.jpg',
		text: 'article text',
	},
	{
		title: 'Article Title',
		imageUrl: 'https://i.ibb.co/WDqJ93M/portrait.jpg',
		text: 'article text',
	},
	{
		title: 'Article Title',
		imageUrl: 'https://i.ibb.co/WDqJ93M/portrait.jpg',
		text: 'article text',
	},
	{
		title: 'Article Title',
		imageUrl: 'https://i.ibb.co/WDqJ93M/portrait.jpg',
		text: 'article text',
	},
	{
		title: 'Article Title',
		imageUrl: 'https://i.ibb.co/WDqJ93M/portrait.jpg',
		text: 'article text',
	},
	{
		title: 'Article Title',
		imageUrl: 'https://i.ibb.co/WDqJ93M/portrait.jpg',
		text: 'article text',
	},
];

const ArticlesPreview = () => {
	return (
		<div className='articles-container'>
			<h1>Latest news</h1>
			{ARTICLES.map(
				(article, index) =>
					index < 7 && (
						<ArticlePreview article={article} key={index} index={index} />
					)
			)}
		</div>
	);
};

export default ArticlesPreview;
