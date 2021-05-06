import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Login.module.css';
import Navbar from '../../componensts/navbar/Navbar';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();

		console.log(email, password);
	};

	return (
		<div>
			<Navbar />
			<br />
			<div className={`container ` + classes.pageLook}>
				<form className={classes.formLook} onSubmit={onSubmit}>
					<h1>Login</h1>
					<hr />
					<input
						type='email'
						placeholder='Enter your email'
						className='form-control my-3'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<input
						type='password'
						placeholder='Enter your password'
						className='form-control my-3'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						minLength={5}
						required
					/>
					<button type='submit' className='btn btn-primary'>
						Login
					</button>
					<p className='my-2'>
						New user? <Link to='/signup'>Register</Link> here!
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
