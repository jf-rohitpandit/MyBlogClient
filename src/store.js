import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { loadToken } from './localState';
import rootReducer from './reducers/index';

const preloadedState = {
	auth: {
		token: loadToken(),
		loading: false,
		error: null,
		success: false,
	},
};

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, preloadedState, composedEnhancer);

export default store;
