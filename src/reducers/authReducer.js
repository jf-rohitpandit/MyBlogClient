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

const initialState = {
	loading: false,
	success: false,
	token: null,
	error: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_LOGIN_REQUEST:
		case USER_REGISTER_REQUEST: {
			return {
				...state,
				loading: true,
				token: null,
				success: false,
				error: null,
			};
		}
		case USER_LOGIN_SUCCESS:
		case USER_REGISTER_SUCCESS: {
			return {
				...state,
				loading: false,
				token: action.payload,
				success: true,
			};
		}
		case USER_LOGIN_FAIL:
		case USER_REGISTER_FAIL: {
			return {
				...state,
				loading: false,
				error: action.error,
			};
		}

		case USER_LOGOUT: {
			return {
				...state,
				token: null,
			};
		}

		case CLEAR_AUTH_ERROR: {
			return {
				...state,
				error: null,
			};
		}

		default: {
			return state;
		}
	}
};

export default authReducer;
