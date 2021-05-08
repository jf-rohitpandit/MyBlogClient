import {
	LIKE_GET_FAIL,
	LIKE_GET_REQUEST,
	LIKE_GET_SUCCESS,
	LIKE_POST_FAIL,
	LIKE_POST_REQUEST,
	LIKE_POST_SUCCESS,
} from '../constanst/likeConstant';

const initialState = {
	loading: false,
	error: null,
	likeCount: 0,
	liked: false,
};

const likeReducer = (state = initialState, action) => {
	console.log(action.payload);
	switch (action.type) {
		case LIKE_POST_REQUEST:
		case LIKE_GET_REQUEST: {
			return {
				...state,
				loading: true,
				error: null,
				likeCount: 0,
				liked: false,
			};
		}
		case LIKE_POST_SUCCESS:
		case LIKE_GET_SUCCESS: {
			return {
				...state,
				loading: false,
				likeCount: action.payload.likeCount,
				liked: action.payload.liked,
			};
		}
		case LIKE_POST_FAIL:
		case LIKE_GET_FAIL: {
			return {
				...state,
				loading: false,
				error: action.error,
			};
		}

		default: {
			return state;
		}
	}
};

export default likeReducer;
