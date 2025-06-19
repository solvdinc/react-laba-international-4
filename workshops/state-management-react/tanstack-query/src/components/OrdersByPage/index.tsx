'use client';
import { useState } from 'react';

import { Orders } from '@/components';

import { useQueryClient } from '@tanstack/react-query';
import { Order } from '@/interfaces';

type InfiniteOrdersData = {
  pages: Order[][];
  pageParams: number[];
};

const OrdersByPage = () => {
  const [page, setPage] = useState<number>(0);

  const queryClient = useQueryClient();
  const orders = queryClient.getQueryData<InfiniteOrdersData>(['orders']);

  return (
    <>
      <input type="number" value={page} onChange={(e) => setPage(Number(e.target.value))} />

      <Orders
        counter={0}
        onIncrementButtonClick={() => {}}
        isLoading={false}
        orders={orders?.pages?.[page] || []}
        selectedOrders={[]}
        isFetching={false}
        onLoadMoreButtonClick={() => {}}
        onSelectOrder={() => {}}
        onDeleteSelectedOrder={() => {}}
      />
    </>
  );
};

export default OrdersByPage;
