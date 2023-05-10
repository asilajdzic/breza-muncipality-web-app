import DownloadFile from '../../components/download-file/download-file.component';

import './e-forms.styles.scss';

const DOWNLOAD_FILE_NAMES = {
	anyFile: 'anyFile.pdf',
};
// will add collection to firestore and read data from there
const EFORMS = [
	{ file: DOWNLOAD_FILE_NAMES.anyFile, name: 'Any File 1' },
	{ file: DOWNLOAD_FILE_NAMES.anyFile, name: 'Any File 2' },
	{ file: DOWNLOAD_FILE_NAMES.anyFile, name: 'Any File 3' },
	{ file: DOWNLOAD_FILE_NAMES.anyFile, name: 'Any File 4' },
	{ file: DOWNLOAD_FILE_NAMES.anyFile, name: 'Any File 5' },
	{ file: DOWNLOAD_FILE_NAMES.anyFile, name: 'Any File 6' },
	{ file: DOWNLOAD_FILE_NAMES.anyFile, name: 'Any File 7' },
	{ file: DOWNLOAD_FILE_NAMES.anyFile, name: 'Any File 8' },
];

const EForm = () => {
	return (
		<div className='e-forms-container' title='Download File'>
			{EFORMS.map((eForm, index) => (
				<div className='e-form-container' key={index}>
					<DownloadFile file={eForm.file} name={eForm.name} path={eForm.path} />
				</div>
			))}
		</div>
	);
};

export default EForm;
