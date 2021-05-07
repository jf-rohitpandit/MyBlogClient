import axios from 'axios';
import {
	BLOG_POST_FAIL,
	BLOG_POST_REQUEST,
	BLOG_POST_SUCCESS,
} from '../constanst/blogConstant';

export const postBlog = (blogData) => async (dispatch) => {
	try {
		dispatch({ type: BLOG_POST_REQUEST });

		await axios.post('http://localhost:5000/blog', {
			title: blogData.title,
			content: blogData.content,
		});

		dispatch({ type: BLOG_POST_SUCCESS });
	} catch (error) {
		dispatch({ type: BLOG_POST_FAIL, error: error.response.data.message });
	}
};
