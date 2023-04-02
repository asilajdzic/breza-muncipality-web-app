import { useState } from 'react';

import { addCollection } from '../../utils/firebase/firebase.utils';
import { FIRESTORE_COLLECTION_TYPES } from '../../utils/firebase/firestore_collection_types';

import './message-form.styles.scss';

const defaultFormFields = {
	email: '',
	message: '',
};

const MessageForm = ({ collectionTitle }) => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, message } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const submitFormHandler = async (e) => {
		e.preventDefault();

		addCollection(FIRESTORE_COLLECTION_TYPES.FORMS, [
			{
				category: collectionTitle,
				email: email,
				message: message,
			},
		]);

		resetFormFields();
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<form className='form-container' onSubmit={submitFormHandler}>
			<input
				type='email'
				placeholder='Write your email'
				className='email'
				name='email'
				value={email}
				required
				onChange={handleChange}
			/>
			<textarea
				placeholder='Write your message'
				className='message'
				required
				name='message'
				value={message}
				onChange={handleChange}
			/>
			<button type='submit' className='submit-message-button'>
				Send
			</button>
		</form>
	);
};

export default MessageForm;
