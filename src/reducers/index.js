import { combineReducers } from 'redux';
import authReducer from './authReducer';
import blogReducer from './blogReducer';
import commentReducer from './commentReducer';
import likeReducer from './likeReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	blog: blogReducer,
	like: likeReducer,
	comment: commentReducer,
});

export default rootReducer;
