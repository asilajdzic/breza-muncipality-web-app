import { Fragment, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getCollection, addCollection } from './utils/firebase/firebase.utils';
import { setEmployees } from './store/employees/employees.action';

import { FIRESTORE_COLLECTION_TYPES } from './utils/firebase/firestore_collection_types';
import { POSITION_TYPES } from './utils/positions/position-types';
import { ELECTED_POSITIONS } from './utils/positions/elected-positions';
import { ECONOMY_POSITIONS } from './utils/positions/economy-positions';
import { EXPERT_ASSOCIATE_POSITIONS } from './utils/positions/expert-associate-positions';
import { FINANCE_POSITIONS } from './utils/positions/finance-positions';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import AskTheMayor from './routes/ask-the-mayor/ask-the-mayor.component';
import AskTheCouncil from './routes/ask-the-council/ask-the-council.component';
import EForm from './routes/e-forms/e-forms.component';
import Footer from './components/footer/footer.component';
import ReportCorruption from './routes/report-corruption/report-corruption.component';
import Departments from './routes/departmens/departments.component';

//temporary method of adding documents to firestore
const EMPLOYEES = [
	{
		category: POSITION_TYPES.ELECTED,
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
		category: POSITION_TYPES.EXPERT_ASSOCIATE,
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
	{
		category: POSITION_TYPES.ECONOMY,
		employeesArray: [
			{
				name: 'Name',
				surname: 'Surname',
				email: 'Email',
				image: 'https://i.ibb.co/WDqJ93M/portrait.jpg',
				title: ECONOMY_POSITIONS.EXPERT_ASSOCIATE_FOR_DEVELOPMENT,
				jobDesc: ['thing 1', 'thing 2', 'thing 3'],
			},
		],
	},
	{
		category: POSITION_TYPES.FINANCE,
		employeesArray: [
			{
				name: 'Name',
				surname: 'Surname',
				email: 'Email',
				image: 'https://i.ibb.co/WDqJ93M/portrait.jpg',
				title: FINANCE_POSITIONS.SENIOR_ACCOUNTING_OFFICER,
				jobDesc: ['thing 1', 'thing 2', 'thing 3'],
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
					<Route path='/e-forms' element={<EForm />} />
					<Route path='/report-corruption' element={<ReportCorruption />} />
					<Route path='/departments' element={<Departments />} />
				</Route>
			</Routes>
			<Footer />
		</Fragment>
	);
}

export default App;
