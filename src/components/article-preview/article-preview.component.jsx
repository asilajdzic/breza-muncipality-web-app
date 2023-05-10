import { Fragment, useState } from 'react';

import DisplayPDF from '../display-pdf/display-pdf.component';

import './article-preview.styles.scss';

const ArticlePreview = ({ article }) => {
	const [showBoolean, setShowBoolean] = useState(false);
	const { title, imageUrl, fileUrl } = article;
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
			<span onClick={onOpen} className='article-container'>
				<img src={imageUrl} alt='Error loading resource' border='0'></img>
				<h1>{title}</h1>
			</span>
			{showBoolean && (
				<DisplayPDF onClick={onClose} file={fileUrl}></DisplayPDF>
			)}
		</Fragment>
	);
};

export default ArticlePreview;
