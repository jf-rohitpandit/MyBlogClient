import { configureStore } from '@reduxjs/toolkit';
import { loadToken } from './localState';

import authReducer from './reducers/authReducer';
import blogReducer from './reducers/blogReducer';
import commentReducer from './reducers/commentReducer';
import likeReducer from './reducers/likeReducer';

const preloadedState = {
	auth: {
		token: loadToken(),
		loading: false,
		error: null,
		success: false,
	},
};

const store = configureStore({
	reducer: {
		auth: authReducer,
		blog: blogReducer,
		like: likeReducer,
		comment: commentReducer,
	},
	preloadedState,
});

export default store;
