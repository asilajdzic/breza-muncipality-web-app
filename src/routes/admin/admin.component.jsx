import './admin.styles.scss';

const Admin = () => {
	return (
		<div className='admin-container'>
			<section className='admin-main-container'></section>
			<section className='admin-sidebar-container'>
				<span className='admin-sidebar-item'>Messages for Mayor</span>
				<span className='admin-sidebar-item'>Messages for Council</span>
				<span className='admin-sidebar-item'>Reports of Corruption</span>
				<span className='admin-sidebar-item'>Add Employee</span>
			</section>
		</div>
	);
};

export default Admin;
