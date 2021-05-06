import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
	return (
		<div className={classes.looks}>
			<nav className={`navbar navbar-expand-lg navbar-light bg-light`}>
				<NavLink to='/' className='navbar-brand'>
					MyBlog
				</NavLink>
				<ul className='navbar-nav m-auto'>
					<li className='nav-item'>
						<NavLink to='/' className='nav-link'>
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
				<form>
					<button type='submit' className='btn btn-success'>
						Logout
					</button>
				</form>
			</nav>
		</div>
	);
};

export default Navbar;
