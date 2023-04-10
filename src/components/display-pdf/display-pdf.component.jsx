import './display-pdf.styles.scss';

const DisplayPDF = ({ file, onClick }) => {
	//can add useEffect to set body overflow to hidden to make it so user cannot scroll the background
	return (
		<div className='pdf-viewer-container'>
			<iframe
				title='pdf-file'
				src={file}
				width='90%'
				height='90%'
				className='pdf-file'
			></iframe>
			<div className='pdf-viewer-overlay' onClick={onClick}></div>
		</div>
	);
};

export default DisplayPDF;
