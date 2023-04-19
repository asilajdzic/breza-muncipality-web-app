import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/user.context';

import Messages from '../../components/messages/messages.component';
import Dashboard from '../../components/dashboard/dashboard.component';
import AddEmployee from '../../components/add-employee/add-employee.component';
import AddArticle from '../../components/add-article/add-article.component';

import './admin.styles.scss';

const Admin = () => {
	const { currentUser } = useContext(UserContext);
	const [currentComponent, setCurrentComponent] = useState(<Dashboard />);

	const handleOnClick = (e) => {
		switch (e.currentTarget.id) {
			case 'Dashboard':
				setCurrentComponent(<Dashboard />);
				break;
			case 'Mayor':
				setCurrentComponent(<Messages category='Mayor' />);
				break;
			case 'Council':
				setCurrentComponent(<Messages category='Council' />);
				break;
			case 'Reports of Corruption':
				setCurrentComponent(<Messages category='Report Corruption' />);
				break;
			case 'Add an Employee':
				setCurrentComponent(<AddEmployee />);
				break;
			case 'Add an Article':
				setCurrentComponent(<AddArticle />);
				break;
			default:
				setCurrentComponent(currentComponent);
		}
	};

	return (
		currentUser && (
			<div className='admin-container'>
				<section className='admin-main-container'>{currentComponent}</section>
				<section className='admin-sidebar-container'>
					<span
						className='admin-sidebar-item'
						id='Dashboard'
						onClick={handleOnClick}
					>
						Dashboard
					</span>
					<span
						className='admin-sidebar-item'
						id='Mayor'
						onClick={handleOnClick}
					>
						Messages for Mayor
					</span>
					<span
						className='admin-sidebar-item'
						id='Council'
						onClick={handleOnClick}
					>
						Messages for Council
					</span>
					<span
						className='admin-sidebar-item'
						id='Reports of Corruption'
						onClick={handleOnClick}
					>
						Reports of Corruption
					</span>
					<span
						className='admin-sidebar-item'
						id='Add an Employee'
						onClick={handleOnClick}
					>
						Add an Employee
					</span>
					<span
						id='Add an Article'
						className='admin-sidebar-item'
						onClick={handleOnClick}
					>
						Add an Article
					</span>
				</section>
			</div>
		)
	);
};

export default Admin;
