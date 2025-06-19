import { configureStore } from '@reduxjs/toolkit';

import selectedOrdersReducer from '@/store/slices/selectedOrders';
import counterReducer from '@/store/slices/counter';
import { ordersApi } from '@/store';

export const makeStore = () => {
  return configureStore({
    reducer: {
      selectedOrders: selectedOrdersReducer,
      counter: counterReducer,
      [ordersApi.reducerPath]: ordersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ordersApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
