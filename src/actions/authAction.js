import axios from 'axios';
import {
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	CLEAR_AUTH_ERROR,
} from '../constanst/authConstant';
import { deleteToken, saveToken } from '../localState';

export const registerUser = (userData) => async (dispatch) => {
	try {
		dispatch({ type: USER_REGISTER_REQUEST });

		const result = await axios.post(
			'https://safe-sands-61885.herokuapp.com/auth/signup',
			{
				email: userData.email,
				password: userData.password,
			}
		);

		dispatch({
			type: USER_REGISTER_SUCCESS,
			payload: result.data.token,
		});
		saveToken(result.data.token);
	} catch (error) {
		dispatch({ type: USER_REGISTER_FAIL, error: error.response.data.message });
		setTimeout(() => {
			dispatch({ type: CLEAR_AUTH_ERROR });
		}, 2000);
	}
};

export const loginUser = (userData) => async (dispatch) => {
	try {
		dispatch({ type: USER_LOGIN_REQUEST });

		const result = await axios.post(
			'https://safe-sands-61885.herokuapp.com/auth/login',
			{
				email: userData.email,
				password: userData.password,
			}
		);

		dispatch({ type: USER_LOGIN_SUCCESS, payload: result.data.token });
		saveToken(result.data.token);
	} catch (error) {
		dispatch({ type: USER_LOGIN_FAIL, error: error.response.data.message });
		setTimeout(() => {
			dispatch({ type: CLEAR_AUTH_ERROR });
		}, 2000);
	}
};

export const logout = () => async (dispatch) => {
	dispatch({ type: USER_LOGOUT });
	deleteToken();
};
