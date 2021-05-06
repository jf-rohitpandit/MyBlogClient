import axios from 'axios';
import {
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
} from '../constanst/authConstant';

export const registerUser = (userData) => async (dispatch) => {
	try {
		dispatch({ type: USER_REGISTER_REQUEST });

		const result = await axios.post('http://localhost:5000/auth/signup', {
			email: userData.email,
			password: userData.password,
		});

		dispatch({
			type: USER_REGISTER_SUCCESS,
			payload: result.data.token,
		});
	} catch (error) {
		dispatch({ type: USER_REGISTER_FAIL, error: error.response.data.message });
	}
};

export const loginUser = (userData) => async (dispatch) => {
	try {
		dispatch({ type: USER_LOGIN_REQUEST });

		const result = await axios.post('http://localhost:5000/auth/login', {
			email: userData.email,
			password: userData.password,
		});

		dispatch({ type: USER_LOGIN_SUCCESS, payload: result.data.token });
	} catch (error) {
		dispatch({ type: USER_LOGIN_FAIL, error: error.response.data.message });
	}
};

export const logout = () => async (dispatch) => {
	dispatch({ type: USER_LOGOUT });
};
