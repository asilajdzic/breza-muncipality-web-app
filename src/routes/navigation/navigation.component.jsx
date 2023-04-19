import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { signOutUser } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../contexts/user.context';

import { ReactComponent as MunicipalityLogo } from '../../assets/logo.svg';
import { ReactComponent as FBLogo } from '../../assets/facebook-icon.svg';
import { ReactComponent as YTLogo } from '../../assets/youtube-icon.svg';

import './navigation.styles.scss';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);

	const signOutHandler = () => signOutUser();

	return (
		<Fragment>
			<div className='navigation-container'>
				<Link className='logo-container' to='/'>
					<MunicipalityLogo className='logo' />
				</Link>
				<span className='nav-links-container'>
					<Link to='/' className='nav-link'>
						Home
					</Link>
					<Link to='/departments' className='nav-link'>
						Departments
					</Link>
					{currentUser ? (
						<Fragment>
							<Link to='/admin' className='nav-link'>
								Admin
							</Link>
							<Link to='/' className='nav-link' onClick={signOutHandler}>
								Sign Out
							</Link>
						</Fragment>
					) : (
						<Link to='/sign-in' className='nav-link'>
							Sign in
						</Link>
					)}
					<a
						href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
						className='nav-icon'
						target='_blank'
						rel='noreferrer'
					>
						<FBLogo />
					</a>
					<a
						href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
						className='nav-icon'
						target='_blank'
						rel='noreferrer'
					>
						<YTLogo />
					</a>
				</span>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
