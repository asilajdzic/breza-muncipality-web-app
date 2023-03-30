import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as AnyLogo } from '../../assets/logo.svg';

import './navigation.styles.scss';

const Navigation = () => {
	return (
		<Fragment>
			<div className='navigation-container'>
				<Link className='logo-container' to='/'>
					<AnyLogo className='logo' />
				</Link>
				<div className='nav-links-container'>
					<Link to='/' className='nav-link'>
						Home
					</Link>
					<Link to='/departments' className='nav-link'>
						Departments
					</Link>
					<Link to='/council' className='nav-link'>
						Council
					</Link>
					<Link to='/budget' className='nav-link'>
						Budget
					</Link>
					<Link to='/contact' className='nav-link'>
						Contact
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
