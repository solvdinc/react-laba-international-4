import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Order } from '@/interfaces';

const initialState: Order[] = [];

export const selectedOrders = createSlice({
  name: 'selectedOrders',
  initialState,
  reducers: {
    addOrder: (state, { payload }: PayloadAction<Order>) => {
      state.push(payload);
    },
    removeOrder: (state, { payload }: PayloadAction<Order>) => {
      const index = state.findIndex(({ id }) => id === payload.id);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addOrder, removeOrder } = selectedOrders.actions;

export default selectedOrders.reducer;
