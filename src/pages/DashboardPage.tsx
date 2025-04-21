import React from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { setDashboardTimeRange } from '../store/dashboardUiSlice';
import { fetchLogisticsSummary } from '../api/logisticsApi';
import TimeRangeSelector from '../components/TimeRangeSelector';
import MetricCard from '../components/MetricCard';
import StatusChart from '../components/StatusChart';

const DashboardPage: React.FC = () => {
  const dispatch = useDispatch();
  const dashboardTimeRange = useSelector((state: any) => state.dashboardUi.dashboardTimeRange);
  const { data, isLoading, isError } = useQuery(['logisticsSummary', dashboardTimeRange], 
    () => fetchLogisticsSummary(dashboardTimeRange));


  if (isLoading)
      return <div>Loading...</div>;

  if (isError) return <div>Error loading data</div>;
  
  return (
    <div className='dashboard'>
      <div className='dashboard-metrics'>
      <div>
      <div className='dashboard-metrics-cards'>
      <MetricCard style={{marginRight: '20px'}}
        title="Total Deliveries" 
        value={data.totalDeliveries} 
        isLoading={isLoading} />
        </div>
        <div className='dashboard-metrics-cards'>
      <MetricCard 
        title="On Time Percentage" 
        value={`${data.onTimePercentage}%`} 
        isLoading={isLoading} />
        </div>
        </div>
        <div>
        <div className='dashboard-metrics-cards'>
      <MetricCard 
        title="Average Delivery Time" 
        value={data.averageDeliveryTime} 
        isLoading={isLoading} />
        </div>
        <div className='dashboard-metrics-cards'>
      <MetricCard 
        title="Problem Deliveries" 
        value={data.problemDeliveries} 
        isLoading={isLoading} />
        </div>
        </div>
        <StatusChart 
        data={data.statusDistribution} />
        <TimeRangeSelector />
        </div>
        
    </div>
  );
};

export default DashboardPage;