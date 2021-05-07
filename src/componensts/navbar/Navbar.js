import React from 'react';
import { connect } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { logout } from '../../actions/authAction';
import classes from './Navbar.module.css';

const Navbar = (props) => {
	const history = useHistory();

	const loginLogout = (e) => {
		e.preventDefault();

		if (props.token) {
			props.logout();
			history.push('/login');
		} else {
			history.push('/login');
			return null;
		}
	};

	return (
		<div className={classes.looks}>
			<nav className={`navbar navbar-expand-lg navbar-light bg-light`}>
				<NavLink to='/' className='navbar-brand'>
					MyBlog
				</NavLink>
				<ul className='navbar-nav m-auto'>
					<li className='nav-item'>
						<NavLink exact to='/' className='nav-link'>
							Home
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink to='/trending' className='nav-link'>
							Trending
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink to='/write' className='nav-link'>
							Write Blog
						</NavLink>
					</li>
				</ul>

				<form onSubmit={loginLogout}>
					<button type='submit' className='btn btn-success'>
						{props.token ? 'Logout' : 'Login'}
					</button>
				</form>
			</nav>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	logout: () => dispatch(logout()),
});

const mapStateToProps = (state) => ({
	token: state.auth.token,
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
