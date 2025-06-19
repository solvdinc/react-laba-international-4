import { getOrders } from '@/store/actions/ordersAction';
import { Box, Button, Container, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import OrderItem from './components/OrderItem';
import { addOrder, deleteOrder } from '@/store/actions/selectedOrdersAction';

const headers = [
	{ title: 'Id', width: 1 },
	{ title: 'Date', width: 1.8 },
	{ title: 'Name', width: 1.8 },
	{ title: 'Ship To', width: 1.8 },
	{ title: 'Payment Method', width: 1.8 },
	{ title: 'Amout', width: 1.8 },
];

const Orders = () => {
	const { page, result: orders } = useSelector((state) => state.orders);
	const selectedOrders = useSelector((state) => state.selectedOrders);
	const dispatch = useDispatch();

	return (
		<Box>
			<Grid container sx={{ mb: '20px' }}>
				{headers?.map((item, idx) => (
					<Grid item xs={item.width} key={idx}>
						{item.title}
					</Grid>
				))}
			</Grid>

			{orders?.map((item) => (
				<OrderItem
					isSelected={selectedOrders.includes(item.id)}
					onAddOrder={() => dispatch(addOrder(item.id))}
					onDeleteOrder={() => dispatch(deleteOrder(item.id))}
					key={item.id}
					{...item}
				/>
			))}

			<Button onClick={() => dispatch(getOrders(page))}>Setup Data</Button>
		</Box>
	);
};

export default Orders;
