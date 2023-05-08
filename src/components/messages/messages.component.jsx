import { Fragment, useEffect, useState } from 'react';

import { v4 as uuid } from 'uuid';

import {
	getCollection,
	createAnswerDocument,
	deleteDocument,
} from '../../utils/firebase/firebase.utils';

import './messages.styles.scss';

const messageInitialState = {
	uid: '',
	email: '',
	message: '',
	to: '',
	sent: '',
};

const defaultFormFields = {
	message: '',
	answer: '',
};

const Messages = ({ category = 'Mayor' }) => {
	const [messages, setMessages] = useState([]);
	const [currentMessage, setCurrentMessage] = useState(messageInitialState);
	const [isAnswering, setIsAnswering] = useState(false);
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { message, answer } = formFields;

	useEffect(() => {
		const getMessages = async () => {
			const data = await getCollection(category);
			setMessages(data);
		};
		getMessages();
	}, [category, messages]);

	const onClickHandler = (e) => {
		setCurrentMessage(messages[e.target.getAttribute('index')]);
		setIsAnswering(false);
	};

	const onClickAnswerHandler = () => {
		setFormFields({ answer, message: currentMessage.message });
		setIsAnswering(true);
	};

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const onFormSubmit = async (e) => {
		e.preventDefault();
		const uid = uuid();

		try {
			await createAnswerDocument('Answers', {
				uid,
				message,
				answer,
			});
		} catch (err) {
			console.log(err.message);
		}
		try {
			await deleteDocument(currentMessage.to, currentMessage.uid);
			setMessages(messages.filter((message) => message.uid !== uid));
			setCurrentMessage(messageInitialState);
		} catch (error) {
			console.log(error.message);
		}
		resetFormFields();
		setIsAnswering(false);
	};

	return (
		<div className='messages-container'>
			<section className='message-container'>
				{currentMessage !== messageInitialState && (
					<Fragment>
						{isAnswering ? (
							<dialog className='answer-dialog' open>
								<form
									method='dialog'
									className='answer-form-container'
									onSubmit={onFormSubmit}
								>
									<textarea
										onChange={handleChange}
										placeholder='Type your answer here:'
										name='answer'
										required
										value={answer}
										className='answer-text'
									></textarea>
									<button className='submit-answer-btn'>Submit</button>
								</form>
							</dialog>
						) : (
							<Fragment>
								<p className='message-header'>From: {currentMessage.email}</p>
								<p className='message-body'>
									Message: <br />
									{currentMessage.message}{' '}
								</p>
								<div className='message-footer'>
									<p className='timestamp'>Sent at: {currentMessage.sent}</p>
									<button className='answer-btn' onClick={onClickAnswerHandler}>
										Answer
									</button>
								</div>
							</Fragment>
						)}
					</Fragment>
				)}
			</section>
			<section className='messages-sidebar-container'>
				{messages.map((message, index) => (
					<span
						className='message-preview'
						key={index}
						index={index}
						onClick={onClickHandler}
					>
						{message.email}
					</span>
				))}
			</section>
		</div>
	);
};

export default Messages;
