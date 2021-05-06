import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Login.module.css';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();

		console.log(email, password);
	};

	return (
		<div className={`container ` + classes.pageLook}>
			<form className={classes.formLook} onSubmit={onSubmit}>
				<h1>Login</h1>
				<hr />
				<input
					type='text'
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
					required
				/>
				<button type='submit' className='btn btn-primary'>
					Login
				</button>
				<p className='my-2'>
					New user? <Link to='#'>Register</Link> here!
				</p>
			</form>
		</div>
	);
};

export default Login;
