import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type timeRange = 'today' | 'week' |'month';


interface DashboardUiState {
  dashboardTimeRange: timeRange;
}


const initialState: DashboardUiState = {
  dashboardTimeRange: 'today',
};

const dashboardUiSlice = createSlice({
  name: 'dashboardUi',
  initialState,
  reducers: {
    setDashboardTimeRange(state, action: PayloadAction<timeRange>) {
      state.dashboardTimeRange = action.payload;
    },
  },
});

export const { setDashboardTimeRange } = dashboardUiSlice.actions;
export default dashboardUiSlice.reducer;