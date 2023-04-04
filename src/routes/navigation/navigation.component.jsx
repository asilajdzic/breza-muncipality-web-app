import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { ReactComponent as MunicipalityLogo } from '../../assets/logo.svg';
import { ReactComponent as FBLogo } from '../../assets/facebook-icon.svg';
import { ReactComponent as YTLogo } from '../../assets/youtube-icon.svg';

import './navigation.styles.scss';

const Navigation = () => {
	const currentUser = useSelector(selectCurrentUser);

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
					<Link to='/council' className='nav-link'>
						Council
					</Link>
					<Link to='/budget' className='nav-link'>
						Budget
					</Link>
					{currentUser ? (
						<span className='nav-link' onClick={signOutHandler}>
							Sign Out
						</span>
					) : (
						<Link to='/sign-in' className='nav-link'>
							Sign in
						</Link>
					)}
					<a
						href='https://www.facebook.com/opcinabreza/'
						className='nav-icon'
						target='_blank'
						rel='noreferrer'
					>
						<FBLogo />
					</a>
					<a
						href='https://www.youtube.com/channel/UCOakqrxQuiaPcGh4dn-INuA'
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
