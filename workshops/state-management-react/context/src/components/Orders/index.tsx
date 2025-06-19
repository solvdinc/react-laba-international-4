'use client';

import { Box, Button, Grid } from '@mui/material';
import { useOrdersContext } from '@/store/orders';

import { OrderItem } from '@/components';

const headers = [
  { title: 'Id', width: 1 },
  { title: 'Date', width: 1.8 },
  { title: 'Name', width: 1.8 },
  { title: 'Ship To', width: 1.8 },
  { title: 'Payment Method', width: 1.8 },
  { title: 'Amout', width: 1.8 },
];

const Orders = () => {
  const {
    orders,
    loadOrders,
    isLoading,
    isLoadingMore,
    selectOrder,
    deleteSelectedOrder,
    selectedOrders,
  } = useOrdersContext();

  return (
    <Box sx={{ padding: '40px 20px' }}>
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
                onSelectOrder={selectOrder}
                onDeleteSelectedOrder={deleteSelectedOrder}
                key={item.id}
                {...item}
              />
            );
          })}

      {isLoadingMore ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: '20px' }}>Loading...</Box>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: '20px' }}>
          <Button onClick={loadOrders}>Load More</Button>
        </Box>
      )}
    </Box>
  );
};

export default Orders;
