import React, { lazy, Suspense, useEffect } from 'react';
import { QueryClient, useQuery, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogisticsSummary } from '../api/logisticsApi';
import TimeRangeSelector from '../components/TimeRangeSelector';
import socket from '../components/socket'

const MetricCard = lazy(() => import('../components/MetricCard'));
const StatusChart = lazy(() => import('../components/StatusChart'));
const DashboardPage: React.FC = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const dashboardTimeRange = 
    useSelector((state: any) => state.dashboardUi.dashboardTimeRange);

  const { data, isLoading, isError } = 
    useQuery(['logisticsSummary', dashboardTimeRange], 
    () => fetchLogisticsSummary(dashboardTimeRange));


useEffect(() => {
  socket.on('updateDeliveries', () => {
    queryClient.invalidateQueries(['logisticsSummary']);
  })
return () => {
  socket.off('updateDeliveries');
  socket.disconnect();
};
})

  if (isLoading)
      return <div className='loader'>Loading...</div>;

  if (isError) return <div>Error loading data</div>;
  
  return (
    
    <div className='dashboard'>
        <div>
          <div className='dashboard-metrics-cards'>
            <Suspense fallback={<div>Loading...</div>}>
            <MetricCard 
              title="Total Deliveries of all time" 
              value={data.totalDeliveries} 
              isLoading={isLoading} />
            </Suspense>
          
          </div>
          
      <div className='dashboard-metrics-cards'>
        
      <Suspense fallback={<div>Loading...</div>}>
        <MetricCard 
          title="On Time Percentage" 
          value={`${data.onTimePercentage}%`} 
          isLoading={isLoading} />
        </Suspense>
        
      </div>
      </div>
        
        <div>
          <div className='dashboard-metrics-cards'>
            
            <Suspense fallback={<div>Loading...</div>}>
            <MetricCard 
              title="Average Delivery Time" 
              value={data.averageDeliveryTime} 
              isLoading={isLoading} />
            </Suspense>
           
          </div>
          
          <div className='dashboard-metrics-cards'>
            
            <Suspense fallback={<div>Loading...</div>}>
            <MetricCard 
              title="Problem Deliveries" 
              value={data.problemDeliveries} 
              isLoading={isLoading} />
            </Suspense>
           
          </div>
        </div>
        <div className='dashboard-chart-container'>
        <Suspense fallback={<div>Loading...</div>}>
        <StatusChart 
          data={data.statusDistribution} />
        </Suspense>
        <TimeRangeSelector />
        </div>
        </div>
  );
};

export default DashboardPage;