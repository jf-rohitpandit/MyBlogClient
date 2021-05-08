import {
	BLOG_HOME_FAIL,
	BLOG_HOME_REQUEST,
	BLOG_HOME_SUCCESS,
	BLOG_TRENDING_FAIL,
	BLOG_TRENDING_REQUEST,
	BLOG_TRENDING_SUCCESS,
	BLOG_POST_FAIL,
	BLOG_POST_REQUEST,
	BLOG_POST_SUCCESS,
	BLOG_GET_FAIL,
	BLOG_GET_REQUEST,
	BLOG_GET_SUCCESS,
} from '../constanst/blogConstant';

const initialState = {
	success: false,
	error: null,
	loading: false,
	posts: [],
	post: null,
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
		//GET the request for Home route
		case BLOG_HOME_REQUEST: {
			return {
				...state,
				loading: true,
				error: null,
				success: false,
			};
		}
		case BLOG_HOME_SUCCESS: {
			return {
				...state,
				success: true,
				loading: false,
				posts: action.payload,
			};
		}
		case BLOG_HOME_FAIL: {
			return {
				...state,
				loading: false,
				error: action.error,
			};
		}
		//GET the request for Trending route
		case BLOG_TRENDING_REQUEST: {
			return {
				...state,
				loading: true,
				error: null,
				success: false,
			};
		}
		case BLOG_TRENDING_SUCCESS: {
			return {
				...state,
				loading: false,
				posts: action.payload,
			};
		}
		case BLOG_TRENDING_FAIL: {
			return {
				...state,
				loading: false,
				error: action.error,
			};
		}

		//getting a single blog
		case BLOG_GET_REQUEST: {
			return {
				...state,
				loading: true,
				post: null,
				error: null,
				success: false,
			};
		}

		case BLOG_GET_SUCCESS: {
			return {
				...state,
				loading: false,
				post: action.payload,
				success: true,
			};
		}

		case BLOG_GET_FAIL: {
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
