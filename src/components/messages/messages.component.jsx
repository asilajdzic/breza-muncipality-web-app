import { useEffect, useState } from 'react';

import { getCollection } from '../../utils/firebase/firebase.utils';

import './messages.styles.scss';

const messageInitialState = {
	email: '',
	message: '',
	to: '',
	sent: '',
};

const Messages = ({ category = 'Mayor' }) => {
	const [messages, setMessages] = useState([]);
	const [currentMessage, setCurrentMessage] = useState(messageInitialState);
	useEffect(() => {
		getCollection(category).then((data) => setMessages(data));
	}, [category]);
	const onClickHandler = (e) => {
		setCurrentMessage(messages[e.target.getAttribute('index')]);
	};
	return (
		<div className='messages-container'>
			{currentMessage !== messageInitialState ? (
				<section className='message-container'>
					<p className='message-header'>From: {currentMessage.email}</p>
					<p className='message-body'>
						Message: <br />
						{currentMessage.message}{' '}
					</p>
					<p className='message-footer'>Sent at: {currentMessage.sent}</p>
				</section>
			) : (
				<section className='message-container' />
			)}
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
