import { configureStore } from '@reduxjs/toolkit';
import dashboardUiReducer from './dashboardUiSlice';
import deliveriesUiReducer from './deliveriesUiSlice';
import themeReducer from './themeSlice';

const store = configureStore({
  reducer: {
    dashboardUi: dashboardUiReducer,
    deliveriesUi: deliveriesUiReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;