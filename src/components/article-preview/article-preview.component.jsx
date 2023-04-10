import { Fragment, useState } from 'react';

import DisplayPDF from '../display-pdf/display-pdf.component';

import './article-preview.styles.scss';

const ArticlePreview = ({ article, index }) => {
	const [showBoolean, setShowBoolean] = useState(false);
	const { title, text, imageUrl, url } = article;
	const className = index === 0 ? 'first-element' : 'article-container';

	return (
		<Fragment>
			<span
				onClick={() => {
					setShowBoolean(true);
				}}
				className={className}
			>
				<img src={imageUrl} alt='Error loading resource' border='0'></img>
				<h1>{title}</h1>
				<p>{text}</p>
			</span>
			{showBoolean && <DisplayPDF file={url}></DisplayPDF>}
		</Fragment>
	);
};

export default ArticlePreview;
