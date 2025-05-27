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
    <>
    <div className='time-range-selector'>
    <button 
      className='choice' 
      onClick={() => dispatch(setDashboardTimeRange('today'))}>
        Today
    </button>
    <button 
      className='choice' 
      onClick={() => dispatch(setDashboardTimeRange('week'))}>
        Week
    </button>
    <button 
      className='choice' 
      onClick={() => dispatch(setDashboardTimeRange('month'))}>
        Month
    </button>
    </div>
    </>
  );
};

export default TimeRangeSelector;