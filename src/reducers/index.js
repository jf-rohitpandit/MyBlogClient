import { combineReducers } from 'redux';
import authReducer from './authReducer';
import blogReducer from './blogReducer';
import likeReducer from './likeReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	blog: blogReducer,
	like: likeReducer,
});

export default rootReducer;
