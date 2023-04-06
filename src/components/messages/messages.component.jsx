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
			<section className='message-container'>
				From: {currentMessage.email} <br />
				Message: <br />
				{currentMessage.message} <br />
				Sent at: {currentMessage.sent}
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
