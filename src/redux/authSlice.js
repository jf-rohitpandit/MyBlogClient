import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {},
	reducers: {
		userLoginRequest: (state, action) => {
			return {
				loading: true,
				token: null,
				success: false,
				error: null,
			};
		},
		userSignupRequest: (state, action) => {
			state.loading = false;
		},
	},
});

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