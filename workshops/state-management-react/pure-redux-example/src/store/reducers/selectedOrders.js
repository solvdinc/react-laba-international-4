import { ADD_ORDER, DELETE_ORDER } from '../actions/selectedOrdersAction';

const selectedOrders = (state = [], action) => {
	switch (action.type) {
		case ADD_ORDER:
			return [...state, action.payload.id];
		case DELETE_ORDER:
			return state.filter((id) => id !== action.payload.id);
		default:
			return state;
	}
};

export default selectedOrders;
