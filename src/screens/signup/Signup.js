import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../componensts/navbar/Navbar';
import classes from './Signup.module.css';
import { registerUser } from '../../actions/authAction';

const Signup = (props) => {
	const history = useHistory();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	useEffect(() => {
		if (props.token && props.success) {
			history.push('/');
			return null;
		}

		if (props.error) {
			toast.error(props.error);
		}
	}, [props]);

	const onSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			console.log('passwords not matched');
		}

		await props.register({ email, password });
	};

	return (
		<div className=''>
			<Navbar />
			<br />
			<ToastContainer />
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
						Already Registered? <Link to='/login'>Login</Link> here!
					</p>
				</form>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	token: state.auth.token,
	loading: state.auth.loading,
	error: state.auth.error,
	success: state.auth.success,
});

const mapDispatchToProps = (dispatch) => ({
	register: (userData) => dispatch(registerUser(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
