import { configureStore } from '@reduxjs/toolkit';
import dashboardUiReducer from './dashboardUiSlice';
import deliveriesUiReducer from './deliveriesUiSlice';

const store = configureStore({
  reducer: {
    dashboardUi: dashboardUiReducer,
    deliveriesUi: deliveriesUiReducer,
  },
});

export default store;