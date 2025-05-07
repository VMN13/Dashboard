import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DashboardUiState {
  dashboardTimeRange: 'today' | 'week' | 'month';
}

const initialState: DashboardUiState = {
  dashboardTimeRange: 'today',
};


const dashboardUiSlice = createSlice({
  name: 'dashboardUi',
  initialState,
  reducers: {
    setDashboardTimeRange(state, action: PayloadAction<'today' | 'week' | 'month'>) {
      state.dashboardTimeRange = action.payload;
    },
  },
});

export const { setDashboardTimeRange } = dashboardUiSlice.actions;
export default dashboardUiSlice.reducer;