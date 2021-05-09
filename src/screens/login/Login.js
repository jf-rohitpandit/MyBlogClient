import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classes from './Login.module.css';
import Navbar from '../../componensts/navbar/Navbar';
import { loginUser } from '../../actions/authAction';

const Login = (props) => {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		if (props.token) {
			history.push('/');
			return null;
		}
		if (props.error) {
			toast.error(props.error);
		}
		// eslint-disable-next-line
	}, [props]);

	const onSubmit = async (e) => {
		e.preventDefault();

		await props.login({ email, password });
	};

	return (
		<div>
			<Navbar />
			<br />
			<ToastContainer />
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

const mapStateToProps = (state) => ({
	token: state.auth.token,
	loading: state.auth.loading,
	error: state.auth.error,
	success: state.auth.success,
});

const mapDispatchToProps = (dispatch) => ({
	login: (userData) => dispatch(loginUser(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
