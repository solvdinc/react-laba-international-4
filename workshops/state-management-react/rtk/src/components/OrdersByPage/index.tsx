'use client';

import { Orders } from '@/components';
import { useAppDispatch, useAppSelector } from '../../../lib/hooks';
import { increment } from '@/store/slices/counter';
import { useLazyGetOrdersQuery } from '@/store';
import { addOrder, removeOrder } from '@/store/slices/selectedOrders';
import { useState } from 'react';

const OrdersByPage = () => {
  const dispatch = useAppDispatch();
  const selectedOrders = useAppSelector((state) => state.selectedOrders);
  const counter = useAppSelector((state) => state.counter);
  const [loadData, { data: orders, isLoading, isFetching }] = useLazyGetOrdersQuery();

  const [page, setPage] = useState<number>(0);

  const getLoadDataHandler = () => {
    loadData(page, true);
  };

  return (
    <>
      <input type="number" value={page} onChange={(e) => setPage(Number(e.target.value))} />

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
    </>
  );
};

export default OrdersByPage;
