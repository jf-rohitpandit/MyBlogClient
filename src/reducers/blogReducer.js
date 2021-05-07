import {
	BLOG_POST_FAIL,
	BLOG_POST_REQUEST,
	BLOG_POST_SUCCESS,
} from '../constanst/blogConstant';

const initialState = {
	success: false,
	error: null,
	loading: false,
};

const blogReducer = (state = initialState, action) => {
	switch (action.type) {
		case BLOG_POST_REQUEST: {
			return {
				...state,
				loading: false,
				success: false,
				error: false,
			};
		}
		case BLOG_POST_SUCCESS: {
			return {
				...state,
				loading: false,
				success: true,
			};
		}
		case BLOG_POST_FAIL: {
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

export default blogReducer;
