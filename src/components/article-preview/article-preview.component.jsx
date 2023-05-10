import { Fragment, useState } from 'react';

import DisplayPDF from '../display-pdf/display-pdf.component';

import './article-preview.styles.scss';

const ArticlePreview = ({ article }) => {
	const [showBoolean, setShowBoolean] = useState(false);
	const { title, snippet, imageUrl, fileUrl } = article;
	const onOpen = () => {
		setShowBoolean(true);
		document.body.classList.add('modal-open');
	};
	const onClose = () => {
		setShowBoolean(false);
		document.body.classList.remove('modal-open');
	};
	return (
		<Fragment>
			<span className='article-container'>
				<img
					onClick={onOpen}
					src={imageUrl}
					alt='Error loading resource'
					border='0'
				></img>
				<h1 onClick={onOpen}>{title}</h1>
				<h2 onClick={onOpen}>{snippet}</h2>
			</span>
			{showBoolean && (
				<DisplayPDF onClick={onClose} file={fileUrl}></DisplayPDF>
			)}
		</Fragment>
	);
};

export default ArticlePreview;
