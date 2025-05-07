import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDashboardTimeRange } from '../store/dashboardUiSlice';

const TimeRangeSelector: React.FC = () => {
  const dispatch = useDispatch();
  const timeRange = 
    useSelector((state: any) => 
      state.dashboardUi.dashboardTimeRange);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setDashboardTimeRange(event.target.value as 'today' | 'week' | 'month'));
  };

  return (
    <select value={timeRange} onChange={handleChange}>
      <option value="today">Today</option>
      <option value="week">Current Week</option>
      <option value="month">Current Month</option>
    </select>
  );
};

export default TimeRangeSelector;