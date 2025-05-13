import { configureStore } from '@reduxjs/toolkit';
import dashboardUiReducer from './dashboardUiSlice';
import deliveriesUiReducer from './deliveriesUiSlice';

const store = configureStore({
  reducer: {
    dashboardUi: dashboardUiReducer,
    deliveriesUi: deliveriesUiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;