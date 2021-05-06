import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const preloadedState = [];

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, preloadedState, composedEnhancer);

export default store;
