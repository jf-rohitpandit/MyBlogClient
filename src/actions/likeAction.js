import axios from 'axios';
import {
	LIKE_POST_FAIL,
	LIKE_POST_SUCCESS,
	LIKE_POST_REQUEST,
	LIKE_GET_FAIL,
	LIKE_GET_SUCCESS,
	LIKE_GET_REQUEST,
} from '../constanst/likeConstant';

export const getLikes = (postId) => async (dispatch) => {
	try {
		dispatch({ type: LIKE_GET_REQUEST });

		//axios request

		const result = await axios.get(`http://localhost:5000/blog/like/${postId}`);

		dispatch({ type: LIKE_GET_SUCCESS, payload: result.data });
	} catch (error) {
		dispatch({ type: LIKE_GET_FAIL, error: error.response.data.message });
	}
};

export const postLike = (postId) => async (dispatch) => {
	try {
		dispatch({ type: LIKE_POST_REQUEST });

		//axios request
		const result = await axios.post(
			`http://localhost:5000/blog/like/${postId}`
		);

		dispatch({ type: LIKE_POST_SUCCESS, payload: result.data });
	} catch (error) {
		dispatch({ type: LIKE_POST_FAIL, error: error.response.data.message });
	}
};
