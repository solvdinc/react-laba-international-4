'use client';

import { Orders } from '@/components';
import { getOrders } from '@/services/orders';
import { useInfiniteQuery } from '@tanstack/react-query';

const OrdersContainer = () => {
  const { data, fetchNextPage, isLoading, isFetching, ...rest } = useInfiniteQuery({
    queryKey: ['orders'],
    enabled: false,
    initialPageParam: 0,
    queryFn: async ({ pageParam = 0 }) => await getOrders(pageParam),
    getPreviousPageParam: (_, allPages) => {
      return allPages.length - 1 || 0;
    },
    getNextPageParam: (_, allPages) => {
      return allPages.length || 0;
    },
  });

  console.log('rest', rest);

  return (
    <Orders
      counter={0}
      onIncrementButtonClick={() => {}}
      isLoading={isLoading}
      orders={data?.pages?.flat() || []}
      selectedOrders={[]}
      isFetching={isFetching}
      onLoadMoreButtonClick={fetchNextPage}
      onSelectOrder={() => {}}
      onDeleteSelectedOrder={() => {}}
    />
  );
};

export default OrdersContainer;
