import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDashboardTimeRange, timeRange } from '../store/dashboardUiSlice';
import { RootState } from '../store';
const TimeRangeSelector: React.FC = () => {
  const dispatch = useDispatch();
  const dashboardTimeRange: timeRange =
    useSelector((state: RootState) => state.dashboardUi.dashboardTimeRange);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setDashboardTimeRange(event.target.value as timeRange));
  };

  return (
    <select className='choice' value={dashboardTimeRange} onChange={handleChange}>
      <option value="today">Today</option>
      <option value="week">Week</option>
      <option value="month">Month</option>
    </select>
  );
};

export default TimeRangeSelector;