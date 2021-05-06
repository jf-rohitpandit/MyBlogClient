import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Signup.module.css';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			console.log('passwords not matched');
		}

		console.log(email, password);
	};

	return (
		<div className={`container ` + classes.pageLook}>
			<form className={classes.formLook} onSubmit={onSubmit}>
				<h1>Signup</h1>
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
				<input
					type='password'
					placeholder='Confirm your password'
					className='form-control my-3'
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					minLength={5}
					required
				/>
				<button type='submit' className='btn btn-primary'>
					Signup
				</button>
				<p className='my-2'>
					New user? <Link to='#'>Register</Link> here!
				</p>
			</form>
		</div>
	);
};

export default Signup;
