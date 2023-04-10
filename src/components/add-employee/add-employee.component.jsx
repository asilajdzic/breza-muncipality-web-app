import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { createEmployeeDocument } from '../../utils/firebase/firebase.utils';

import { DEPARTMENTS_DATA } from '../../utils/data/DEPARTMENTS_DATA';

import './add-employee.styles.scss';

const defaultFormFields = {
	name: '',
	surname: '',
	email: '',
	title: '',
	tasks: '',
	department: 'Elected Positions',
	imageUrl: '',
};

const AddEmployee = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { name, surname, email, title, department, tasks, imageUrl } =
		formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const submitFormHandler = async (e) => {
		e.preventDefault();
		const uid = uuid();
		createEmployeeDocument(department, {
			uid: uid,
			name: name,
			surname: surname,
			email: email,
			title: title,
			imageUrl: imageUrl,
			tasks: tasks.split('.'),
		});

		resetFormFields();
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className='add-employee-container'>
			<form
				onSubmit={submitFormHandler}
				className='add-employee-form-container'
			>
				<input
					className='form-field'
					type='text'
					name='name'
					value={name}
					required
					onChange={handleChange}
					placeholder='Name'
				/>
				<input
					className='form-field'
					type='text'
					name='surname'
					value={surname}
					onChange={handleChange}
					required
					placeholder='Surname'
				/>
				<input
					className='form-field'
					type='email'
					name='email'
					onChange={handleChange}
					value={email}
					required
					placeholder='E-mail'
				/>
				<input
					className='form-field'
					type='text'
					name='imageUrl'
					value={imageUrl}
					onChange={handleChange}
					required
					placeholder='Image URL'
				/>
				<select
					value={department}
					onChange={handleChange}
					className='form-field'
					name='department'
					select='Elected Positions'
				>
					{DEPARTMENTS_DATA.map((department, index) => (
						<option key={index} value={department}>
							{department}
						</option>
					))}
				</select>
				<input
					className='form-field'
					type='text'
					name='title'
					value={title}
					onChange={handleChange}
					required
					placeholder='Job Title'
				/>
				<textarea
					name='tasks'
					className='job-desc'
					value={tasks}
					onChange={handleChange}
					placeholder='Enter Employee tasks, seperate each task by "."'
				></textarea>
				<button type='submit' className='submit-button'>
					Add
				</button>
			</form>
		</div>
	);
};

export default AddEmployee;
