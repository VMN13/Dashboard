import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DeliveryFilters {
  status?: 'pending' | 'in_transit' | 'delivered' | 'problem'
  deliveryService?: string;
}

interface DeliveriesUiState {
  deliveryFilters: DeliveryFilters;
}

const initialState: DeliveriesUiState = {
  deliveryFilters: {
  },
};

const deliveriesUiSlice = createSlice({
  name: 'deliveriesUi',
  initialState,
  reducers: {
    setDeliveryFilter(state, action: PayloadAction<DeliveryFilters>) {
      state.deliveryFilters = 
        { ...state.deliveryFilters, ...action.payload };
    },
  },
});

export const { setDeliveryFilter } = deliveriesUiSlice.actions;
export default deliveriesUiSlice.reducer;