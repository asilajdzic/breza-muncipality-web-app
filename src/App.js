import { Fragment, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
	getCollection,
	onAuthStateChangedListener,
	createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';

import { setEmployees } from './store/employees/employees.action';
import { setCurrentUser } from './store/user/user.action';

import { FIRESTORE_COLLECTION_TYPES } from './utils/firebase/firestore_collection_types';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import AskTheMayor from './routes/ask-the-mayor/ask-the-mayor.component';
import AskTheCouncil from './routes/ask-the-council/ask-the-council.component';
import EForm from './routes/e-forms/e-forms.component';
import Footer from './components/footer/footer.component';
import ReportCorruption from './routes/report-corruption/report-corruption.component';
import Departments from './routes/departmens/departments.component';
import SignIn from './routes/sign-in/sign-in.component';
import Admin from './routes/admin/admin.component';

function App() {
	const dispatch = useDispatch();
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
	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) createUserDocumentFromAuth(user);
			dispatch(setCurrentUser(user));
		});
		return unsubscribe;
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
					<Route path='/sign-in' element={<SignIn />} />
					<Route path='admin' element={<Admin />} />
				</Route>
			</Routes>
			<Footer />
		</Fragment>
	);
}

export default App;
