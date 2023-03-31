import { Fragment, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getCollection, addCollection } from './utils/firebase/firebase.utils';
import { setEmployees } from './store/employees/employees.action';

import { FIRESTORE_COLLECTION_TYPES } from './utils/firebase/firestore_collection_types';
import { POSITION_TYPES } from './utils/positions/position-types';
import { ELECTED_POSITIONS } from './utils/positions/elected-positions';
import { EXPERT_ASSOCIATE_POSITIONS } from './utils/positions/expert-associate-positions';

import Home from './routes/Home/home.component';
import Navigation from './routes/Navigation/navigation.component';
import AskTheMayor from './routes/AskTheMayor/ask-the-mayor.component';
import AskTheCouncil from './routes/AskTheCouncil/ask-the-council.component';

//temporary method of adding documents to firestore
const EMPLOYEES = [
	{
		department: POSITION_TYPES.ELECTED,
		employeesArray: [
			{
				name: 'Name',
				surname: 'Surname',
				email: 'Email',
				image: 'https://i.ibb.co/WDqJ93M/portrait.jpg',
				title: ELECTED_POSITIONS.MAYOR,
			},
			{
				name: 'Name',
				surname: 'Surname',
				email: 'Email',
				image: 'https://i.ibb.co/WDqJ93M/portrait.jpg',
				title: ELECTED_POSITIONS.COUNCILLOR,
			},
			{
				name: 'Name',
				surname: 'Surname',
				email: 'Email',
				image: 'https://i.ibb.co/WDqJ93M/portrait.jpg',
				title: ELECTED_POSITIONS.COUNCILLOR_CHAIRMAN,
			},
			{
				name: 'Name',
				surname: 'Surname',
				email: 'Email',
				image: 'https://i.ibb.co/WDqJ93M/portrait.jpg',
				title: ELECTED_POSITIONS.COUNCILLOR,
			},
		],
	},
	{
		department: POSITION_TYPES.EXPERT_ASSOCIATE,
		employeesArray: [
			{
				name: 'Name',
				surname: 'Surname',
				email: 'Email',
				image: 'https://i.ibb.co/WDqJ93M/portrait.jpg',
				title: EXPERT_ASSOCIATE_POSITIONS.COUNCILS_AFFAIRS,
			},
			{
				name: 'Name',
				surname: 'Surname',
				email: 'Email',
				image: 'https://i.ibb.co/WDqJ93M/portrait.jpg',
				title: EXPERT_ASSOCIATE_POSITIONS.MAYORS_AFFAIRS,
			},
		],
	},
];

function App() {
	const dispatch = useDispatch();
	addCollection(FIRESTORE_COLLECTION_TYPES.EMPLOYEES, EMPLOYEES);
	useEffect(() => {
		const getEmployees = async () => {
			const employees = await getCollection(
				FIRESTORE_COLLECTION_TYPES.EMPLOYEES
			);
			dispatch(setEmployees(employees));
		};
		getEmployees();
		// eslint-disable-next-line
	}, []);

	return (
		<Fragment>
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path='/ask-the-mayor' element={<AskTheMayor />} />
					<Route path='/ask-the-council' element={<AskTheCouncil />} />
				</Route>
			</Routes>
		</Fragment>
	);
}

export default App;
