import './article-preview.styles.scss';

const ArticlePreview = ({ article, index }) => {
	const { title, text, imageUrl } = article;
	console.log(index);
	const className = index === 0 ? 'first-element' : 'article-container';
	return (
		<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' className={className}>
			<img src={imageUrl} alt='Error loading resource' border='0'></img>
			<h1>{title}</h1>
			<p>{text}</p>
		</a>
	);
};

export default ArticlePreview;
