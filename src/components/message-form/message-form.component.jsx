import { Fragment } from 'react';
import './message-form.styles.scss';

const MessageForm = () => {
	return (
		<Fragment>
			<form className='form-container'>
				<input
					type='email'
					placeholder='Write your email'
					className='email'
					required
				/>
				<textarea
					placeholder='Write your message'
					className='message'
					required
				/>
				<button type='submit' className='submit-message-button'>
					Send
				</button>
			</form>
		</Fragment>
	);
};

export default MessageForm;
