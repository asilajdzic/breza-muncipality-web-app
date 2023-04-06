import { useState } from 'react';

import { v4 as uuid } from 'uuid';

import { createMessageDocument } from '../../utils/firebase/firebase.utils';

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
		const uid = uuid();
		createMessageDocument(collectionTitle, {
			uid: uid,
			email: email,
			to: collectionTitle,
			message: message,
		});

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
