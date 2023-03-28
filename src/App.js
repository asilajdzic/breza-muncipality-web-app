import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './routes/Home/home.component';
import Navigation from './routes/Navigation/navigation.component';

import './App.scss';

function App() {
	return (
		<Fragment>
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</Fragment>
	);
}

export default App;
