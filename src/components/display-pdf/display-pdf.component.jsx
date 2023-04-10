import { Fragment, useState } from 'react';
import './display-pdf.styles.scss';

const DisplayPDF = ({ file }) => {
	//can add useEffect to set body overflow to hidden to make it so user cannot scroll the background

	const [isOpen, setIsOpen] = useState(true);

	const handleClose = () => {
		setIsOpen(false);
	};
	return (
		<Fragment>
			{isOpen && (
				<div className='pdf-viewer-container'>
					<iframe
						title='pdf-file'
						src={file}
						width='90%'
						height='90%'
						className='pdf-file'
					></iframe>
					<div className='pdf-viewer-overlay' onClick={handleClose}></div>
				</div>
			)}
		</Fragment>
	);
};

export default DisplayPDF;
