export const SETUP_ORDERS = 'SETUP_ORDERS';
export const SETUP_ORDERS_SUCCESS = 'SETUP_ORDERS_SUCCESS';
export const SETUP_ORDERS_FAILURE = 'SETUP_ORDERS_FAILURE';

export const getOrders = (page) => {
	return (dispatch) => {
		dispatch({ type: SETUP_ORDERS });

		return fetch(`api/orders?page=${page}`)
			.then((res) => res.json())
			.then((orders) =>
				dispatch({ type: SETUP_ORDERS_SUCCESS, payload: { orders } })
			)
			.catch((e) =>
				dispatch({ type: SETUP_ORDERS_FAILURE, payload: { error: e.message } })
			);
	};
};
