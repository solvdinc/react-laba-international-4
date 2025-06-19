'use client';

import { createContext, useContext, useState, ReactNode, useCallback, useMemo } from 'react';

import { Order } from '@/interfaces';

interface OrdersContextValue {
  orders: Order[];
  selectedOrders: Order[];
  loadOrders: () => Promise<void>;
  isLoading: boolean;
  selectOrder: (id: string | number) => void;
  deleteSelectedOrder: (id: string | number) => void;
  isLoadingMore: boolean;
}

const OrdersContext = createContext<OrdersContextValue | undefined>(undefined);

const useOrdersContext = (): OrdersContextValue => {
  const context = useContext(OrdersContext);

  if (context === undefined) {
    throw new Error('useOrdersContext must be used within an OrdersProvider');
  }

  return context;
};

const useOrdersProvider = (): OrdersContextValue => {
  const [page, setPage] = useState<number>(0);
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrders, setSelectedOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  const fetchOrders = useCallback(async (page: number): Promise<Order[] | undefined> => {
    try {
      const req = await fetch(`api/orders?page=${page}`);

      if (!req.ok) {
        throw new Error('Smth Went Wrong');
      }

      const res = await req.json();

      return res;
    } catch (e) {
      alert((e as Error).message);
    }
  }, []);

  const loadOrders = useCallback(async (): Promise<void> => {
    if (!orders.length) {
      setIsLoading(true);
    } else {
      setIsLoadingMore(true);
    }

    const newOrders = await fetchOrders(page);

    if (newOrders) {
      setPage((curr) => curr + 1);
      setOrders((currOrders) => [...currOrders, ...newOrders]);
    }

    setIsLoading(false);
    setIsLoadingMore(false);
  }, [fetchOrders, orders, page]);

  const selectOrder = useCallback(
    (id: string | number): void => {
      const isOrderSelected = selectedOrders.find((item) => item.id === id);

      if (!isOrderSelected) {
        const selectedOrder = orders.find((item) => item.id === id);

        if (selectedOrder) {
          setSelectedOrders((prevOrders) => [...prevOrders, selectedOrder]);
        }
      }
    },
    [orders, selectedOrders],
  );

  const deleteSelectedOrder = useCallback(
    (id: string | number): void => {
      const orderIndex = selectedOrders.findIndex((item) => item.id === id);

      if (orderIndex !== -1) {
        const ordersCopy = [...selectedOrders];
        ordersCopy.splice(orderIndex, 1);

        setSelectedOrders(ordersCopy);
      }
    },
    [selectedOrders],
  );

  return useMemo(() => {
    return {
      orders,
      selectedOrders,
      loadOrders,
      isLoading,
      selectOrder,
      deleteSelectedOrder,
      isLoadingMore,
    };
  }, [
    orders,
    selectedOrders,
    loadOrders,
    isLoading,
    selectOrder,
    deleteSelectedOrder,
    isLoadingMore,
  ]);
};

interface OrdersProviderProps {
  children: ReactNode;
}

const OrdersProvider = ({ children }: OrdersProviderProps) => {
  const orders = useOrdersProvider();

  return <OrdersContext.Provider value={orders}>{children}</OrdersContext.Provider>;
};

export { useOrdersProvider, useOrdersContext, OrdersContext };
export default OrdersProvider;
