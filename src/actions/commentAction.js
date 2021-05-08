import axios from 'axios';
import {
	COMMENT_POST_FAIL,
	COMMENT_POST_SUCCESS,
	COMMENT_POST_REQUEST,
	COMMENT_GET_FAIL,
	COMMENT_GET_SUCCESS,
	COMMENT_GET_REQUEST,
} from '../constanst/commentConstant';

export const getComments = () => async (dispatch) => {
	try {
		dispatch({ type: COMMENT_GET_REQUEST });

		//axios request

		dispatch({ type: COMMENT_GET_SUCCESS });
	} catch (error) {
		dispatch({ type: COMMENT_GET_FAIL, error: error.response.data.message });
	}
};

export const postComment = () => async (dispatch) => {
	try {
		dispatch({ type: COMMENT_POST_REQUEST });

		//axios request

		dispatch({ type: COMMENT_POST_SUCCESS });
	} catch (error) {
		dispatch({ type: COMMENT_POST_FAIL, error: error.response.data.message });
	}
};
