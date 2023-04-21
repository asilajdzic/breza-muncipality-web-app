import { useState, useEffect } from 'react';

import { getCollection, signUpUser } from '../../utils/firebase/firebase.utils';

import './dashboard.styles.scss';

const defaultFormFields = {
	email: '',
	password: '',
	confirmPassword: '',
};

const Dashboard = () => {
	const [users, setUsers] = useState([]);
	const [formFields, setFormFields] = useState(defaultFormFields);

	const { email, password, confirmPassword } = formFields;

	useEffect(() => {
		const getUsers = async () => await getCollection('Users');
		getUsers().then((data) => setUsers(data));
		// eslint-disable-next-line
	}, []);

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const onFormSubmitHandler = (e) => {
		e.preventDefault();
		try {
			const newUser = signUpUser(email, password);
			console.log(newUser);
			setUsers([...users, newUser]);
		} catch (error) {
			console.error(error);
		}
		resetFormFields();
	};
	return (
		<div className='dashboard-container'>
			<div className='users-container'>
				<p>List of current Users: </p>
				<ul>
					{users.map((user, index) => (
						<li key={index}>{user.email}</li>
					))}
				</ul>
			</div>
			<form className='sign-up-user-container' onSubmit={onFormSubmitHandler}>
				<input
					className='form-field'
					type='email'
					name='email'
					value={email}
					required
					onChange={handleChange}
					placeholder='E-mail'
				/>
				<input
					className='form-field'
					type='password'
					name='password'
					value={password}
					required
					onChange={handleChange}
					placeholder='Password'
				/>
				<input
					className='form-field'
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					required
					onChange={handleChange}
					placeholder='Confirm Password'
				/>
				<button type='submit' className='submit-button'>
					Add
				</button>
			</form>
		</div>
	);
};

export default Dashboard;
