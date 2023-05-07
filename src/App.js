import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

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
import Answers from './routes/answers/answers.component';

function App() {
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
					<Route path='/admin' element={<Admin />} />
					<Route path='/answers' element={<Answers />} />
				</Route>
			</Routes>
			<Footer />
		</Fragment>
	);
}

export default App;
