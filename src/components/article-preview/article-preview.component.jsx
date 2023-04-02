import './article-preview.styles.scss';

const ArticlePreview = ({ article }) => {
	const { title, text, imageUrl } = article;

	return (
		<div className='article-container'>
			<h1>{title}</h1>
			<p>{text}</p>
		</div>
	);
};

export default ArticlePreview;
