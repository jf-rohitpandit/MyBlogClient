import axios from 'axios';
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

export const getHomeBlogs = () => async (dispatch) => {
	try {
		dispatch({ type: BLOG_HOME_REQUEST });

		//axios request
		const result = await axios.get('http://localhost:5000/blog');

		dispatch({ type: BLOG_HOME_SUCCESS, payload: result.data.posts });
	} catch (error) {
		dispatch({ type: BLOG_HOME_FAIL, error: error.response.data.message });
	}
};

export const getTrendingBlogs = () => async (dispatch) => {
	try {
		dispatch({ type: BLOG_TRENDING_REQUEST });

		//axios request
		const result = await axios.get('http://localhost:5000/blog/trending');

		dispatch({ type: BLOG_TRENDING_SUCCESS, payload: result.data.posts });
	} catch (error) {
		dispatch({ type: BLOG_TRENDING_FAIL, error: error.response.data.message });
	}
};
