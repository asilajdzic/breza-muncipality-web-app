import './download-file.styles.scss';

const DownloadFile = ({ file, name }) => {
	return (
		<a className='download-file-link' href={file} download={file}>
			<img
				src='https://i.ibb.co/q9HstHd/document-download-svgrepo-com.png'
				className='download-file'
				alt='Error loading resource'
			/>
			<h1 className='file-name'>{name}</h1>
		</a>
	);
};

export default DownloadFile;
