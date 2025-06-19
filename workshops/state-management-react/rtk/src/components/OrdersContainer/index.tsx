'use client';

import { Orders } from '@/components';
import { useAppDispatch, useAppSelector } from '../../../lib/hooks';
import { increment } from '@/store/slices/counter';
import { ordersApi, useLazyGetOrdersQuery } from '@/store';
import { addOrder, removeOrder } from '@/store/slices/selectedOrders';

const OrdersContainer = () => {
  const dispatch = useAppDispatch();
  const selectedOrders = useAppSelector((state) => state.selectedOrders);
  const counter = useAppSelector((state) => state.counter);
  const [loadData] = useLazyGetOrdersQuery();

  const { data: orders, isLoading, isFetching } = ordersApi.endpoints.getOrders.useQueryState(0);

  const getLoadDataHandler = () => {
    loadData((orders?.length || 0) / 5 || 0, true);
  };

  return (
    <Orders
      counter={counter.value}
      onIncrementButtonClick={() => dispatch(increment())}
      isLoading={isLoading}
      orders={orders || []}
      selectedOrders={selectedOrders}
      isFetching={isFetching}
      onLoadMoreButtonClick={getLoadDataHandler}
      onSelectOrder={(order) => dispatch(addOrder(order))}
      onDeleteSelectedOrder={(order) => dispatch(removeOrder(order))}
    />
  );
};

export default OrdersContainer;
