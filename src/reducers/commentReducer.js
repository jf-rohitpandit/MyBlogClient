import {
	COMMENT_GET_FAIL,
	COMMENT_GET_REQUEST,
	COMMENT_GET_SUCCESS,
	COMMENT_POST_FAIL,
	COMMENT_POST_REQUEST,
	COMMENT_POST_SUCCESS,
} from '../constanst/commentConstant';

const initialState = {
	loading: false,
	success: false,
	error: null,
	commentList: [],
};

const commentReducer = (state = initialState, action) => {
	switch (action.type) {
		case COMMENT_GET_REQUEST:
		case COMMENT_POST_REQUEST: {
			return {
				...state,
				loading: true,
				error: null,
				success: false,
				commentList: [],
			};
		}
		case COMMENT_GET_SUCCESS:
		case COMMENT_POST_SUCCESS: {
			return {
				...state,
				loading: false,
				success: true,
				commentList: action.payload,
			};
		}
		case COMMENT_GET_FAIL:
		case COMMENT_POST_FAIL: {
			return {
				...state,
				loading: false,
				error: action.error,
			};
		}
		default:
			return state;
	}
};

export default commentReducer;
