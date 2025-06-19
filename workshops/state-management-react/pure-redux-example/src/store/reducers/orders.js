import {
	SETUP_ORDERS,
	SETUP_ORDERS_SUCCESS,
	SETUP_ORDERS_FAILURE,
} from '../actions/ordersAction';

const orders = (state = {}, action) => {
	switch (action.type) {
		case 'SETUP_ORDERS':
			return {
				...state,
				isLoading: true,
			};
		case 'SETUP_ORDERS_SUCCESS':
			return {
				...state,
				isLoading: false,
				error: null,
				result: [...state.result, ...action.payload.orders],
				page: state.page + 1,
			};
		case 'SETUP_ORDERS_FAILURE':
			return {
				...state,
				isLoading: false,
				error: action.payload.error,
			};
		default:
			return state;
	}
};

export default orders;
