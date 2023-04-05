import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

import './sign-in.styles.scss';

const defaultFormFields = { email: '', password: '' };

const SignIn = () => {
	const navigate = useNavigate();
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const submitFormHandler = async (e) => {
		e.preventDefault();
		try {
			signInAuthUserWithEmailAndPassword(email, password);
			resetFormFields();
			navigate('/');
		} catch (error) {
			console.log('user sign in failed', error);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};
	return (
		<form className='form-container' onSubmit={submitFormHandler}>
			<input
				type='email'
				onChange={handleChange}
				name='email'
				value={email}
				placeholder='E-mail'
				required
			></input>
			<input
				type='password'
				onChange={handleChange}
				name='password'
				value={password}
				placeholder='Password'
				required
			></input>
			<button type='submit' className='sign-in-button'>
				Sign In
			</button>
		</form>
	);
};

export default SignIn;
