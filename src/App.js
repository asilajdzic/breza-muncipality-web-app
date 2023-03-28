import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './routes/Home/home.component';
import Navigation from './routes/Navigation/navigation.component';
import AskTheMayor from './routes/AskTheMayor/ask-the-mayor.component';
import AskTheCouncil from './routes/AskTheCouncil/ask-the-council.component';

import './App.scss';

function App() {
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
