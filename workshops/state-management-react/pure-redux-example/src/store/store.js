import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';

import rootReducer from './reducers/rootReducer';

const initialState = {
	orders: {
		result: [],
		isLoading: false,
		error: null,
		page: 0,
	},
	selectedOrders: [],
};

export const store = createStore(
	rootReducer,
	initialState,
	applyMiddleware(...[thunk])
);

export const wrapper = createWrapper(() => store, { debug: true });
