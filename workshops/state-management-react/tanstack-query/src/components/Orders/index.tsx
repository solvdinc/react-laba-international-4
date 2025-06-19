'use client';

import { Box, Button, Grid, Typography } from '@mui/material';

import { OrderItem } from '@/components';
import { Order } from '@/interfaces';

const headers = [
  { title: 'Id', width: 1 },
  { title: 'Date', width: 1.8 },
  { title: 'Name', width: 1.8 },
  { title: 'Ship To', width: 1.8 },
  { title: 'Payment Method', width: 1.8 },
  { title: 'Amout', width: 1.8 },
];

interface Props {
  counter: number;
  onIncrementButtonClick: () => void;
  isLoading: boolean;
  orders: Order[];
  selectedOrders: Order[];
  isFetching: boolean;
  onLoadMoreButtonClick: () => void;
  onSelectOrder: (order: Order) => void;
  onDeleteSelectedOrder: (order: Order) => void;
}

const Orders = ({
  counter,
  onIncrementButtonClick,
  isLoading,
  orders,
  selectedOrders,
  isFetching,
  onLoadMoreButtonClick,
  onSelectOrder,
  onDeleteSelectedOrder,
}: Props) => {
  return (
    <Box sx={{ padding: '40px 20px' }}>
      <Typography>Count: {counter}</Typography>
      <Button onClick={onIncrementButtonClick}>Increment</Button>
      <Grid container sx={{ mb: '20px' }}>
        {headers?.map((item, idx) => (
          <Grid size={{ xs: item.width }} key={idx} component="div">
            {item.title}
          </Grid>
        ))}
      </Grid>

      {isLoading
        ? 'Loading'
        : orders?.map((item) => {
            return (
              <OrderItem
                isSelected={Boolean(selectedOrders.find((order) => order.id === item.id))}
                onSelectOrder={() => onSelectOrder(item)}
                onDeleteSelectedOrder={() => onDeleteSelectedOrder(item)}
                key={item.id}
                {...item}
              />
            );
          })}

      {isFetching ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: '20px' }}>Loading...</Box>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: '20px' }}>
          <Button onClick={onLoadMoreButtonClick}>Load More</Button>
        </Box>
      )}
    </Box>
  );
};

export default Orders;
