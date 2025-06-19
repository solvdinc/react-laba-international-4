export const ADD_ORDER = 'ADD_ORDER';
export const DELETE_ORDER = 'DELETE_ORDER';

export const addOrder = (id) => ({
	type: ADD_ORDER,
	payload: { id },
});

export const deleteOrder = (id) => ({
	type: DELETE_ORDER,
	payload: { id },
});
