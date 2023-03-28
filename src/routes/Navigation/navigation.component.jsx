import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './navigation.styles.scss';

const Navigation = () => {
	return (
		<Fragment>
			<div className='navigation-container'>
				<div className='logo-container'>Logo</div>
				<div className='nav-links-container'>
					<Link to='/' className='nav-link'>
						Home
					</Link>
					<Link to='/services' className='nav-link'>
						Services
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
