import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { createArticleDocument } from '../../utils/firebase/firebase.utils';

import './add-article.styles.scss';

const defaultFormFields = {
	title: '',
	snippet: '',
	fileUrl: '',
	imageUrl: '',
};

const AddArticle = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { title, snippet, fileUrl, imageUrl } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const onFormSubmitHandler = async (e) => {
		e.preventDefault();
		const uid = uuid();
		await createArticleDocument({
			title,
			snippet,
			fileUrl,
			imageUrl,
			uid,
		});
		resetFormFields();
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className='add-article-container'>
			<form
				className='add-article-form-container'
				onSubmit={onFormSubmitHandler}
			>
				<input
					className='form-field'
					type='text'
					name='title'
					value={title}
					required
					onChange={handleChange}
					placeholder='Headline'
				/>
				<input
					className='form-field'
					type='text'
					name='snippet'
					value={snippet}
					required
					onChange={handleChange}
					placeholder='Snippet'
				/>
				<input
					className='form-field'
					type='text'
					name='fileUrl'
					value={fileUrl}
					required
					onChange={handleChange}
					placeholder='File URL'
				/>
				<input
					className='form-field'
					type='text'
					name='imageUrl'
					value={imageUrl}
					required
					onChange={handleChange}
					placeholder='Image URL'
				/>
				<button type='submit' className='submit-button'>
					Add
				</button>
			</form>
		</div>
	);
};

export default AddArticle;
