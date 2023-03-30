import { Fragment, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getCollection } from './utils/firebase/firebase.utils';
import { setEmployees } from './store/employees/employees.action';

import { FIRESTORE_COLLECTION_TYPES } from './utils/firebase/firestore_collection_types';

import Home from './routes/Home/home.component';
import Navigation from './routes/Navigation/navigation.component';
import AskTheMayor from './routes/AskTheMayor/ask-the-mayor.component';
import AskTheCouncil from './routes/AskTheCouncil/ask-the-council.component';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const getEmployees = async () => {
			const employees = await getCollection(
				FIRESTORE_COLLECTION_TYPES.employees
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
