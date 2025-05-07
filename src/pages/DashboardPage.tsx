import React, { lazy, Suspense, useEffect } from 'react';
import { QueryClient, useQuery, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogisticsSummary } from '../api/logisticsApi';
import TimeRangeSelector from '../components/TimeRangeSelector';
import StatusChart from '../components/StatusChart';
import socket from '../components/socket'

const MetricCard = lazy(() => import('../components/MetricCard'));

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
};
})

  if (isLoading)
      return <div>Loading...</div>;

  if (isError) return <div>Error loading data</div>;
  
  return (
    
    <div className='dashboard'>
        <div>
          <div className='dashboard-metrics-cards'>
            <Suspense fallback={<div>Loading...</div>}>
            <MetricCard 
              title="Total Deliveries" 
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
     

        <StatusChart 
          data={data.statusDistribution} />
        
        <TimeRangeSelector />
        </div>
  
  );
};

export default DashboardPage;