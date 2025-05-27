import React, { lazy, Suspense, useEffect } from 'react';
import { QueryClient, useQuery, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogisticsSummary } from '../api/logisticsApi';
import TimeRangeSelector from '../components/TimeRangeSelector';
import socket from '../components/socket'
import { useMockWebSocket } from '../hooks/useMockWebSocket';

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

 useMockWebSocket();

  if (isLoading)
      return <div className='loader'><div className="lds-facebook"><div></div><div></div><div></div></div></div>;

  if (isError) return <div className='error'>Error loading data</div>;
  
  return (
    
    <div className='dashboard'>
        <div>
          <div className='dashboard-metrics-cards'>
            <Suspense fallback={<div className='loading'><div className="lds-facebook"><div></div><div></div><div></div></div></div>}>
            <MetricCard 
              title="Total Deliveries of all time" 
              value={data.totalDeliveries} 
              isLoading={isLoading} />
            </Suspense>
          
          </div>
          
      <div className='dashboard-metrics-cards'>
        
      <Suspense fallback={<div className="lds-facebook"><div></div><div></div><div></div></div>}>
        <MetricCard 
          title="On Time Percentage" 
          value={`${data.onTimePercentage}%`} 
          isLoading={isLoading} />
        </Suspense>
        
      </div>
      </div>
        
        <div>
          <div className='dashboard-metrics-cards'>
            <div className='dashboard-container'>
            <Suspense fallback={<div className="lds-facebook"><div></div><div></div><div></div></div>}>
            <MetricCard 
              title="Average Delivery Time" 
              value={data.averageDeliveryTime} 
              isLoading={isLoading} />
            </Suspense>
           </div>
          </div>
          
          <div className='dashboard-metrics-cards'>
            
            <Suspense fallback={<div className="lds-facebook"><div></div><div></div><div></div></div>}>
            <MetricCard 
              title="Problem Deliveries" 
              value={data.problemDeliveries} 
              isLoading={isLoading} />
            </Suspense>
           
          </div>
          
        </div>
        <div className='dashboard_chart'>
       
        <div className='dashboard-chart-container'>
        <Suspense fallback={<div className="lds-facebook"><div></div><div></div><div></div></div>}>
        <div className='chart-container'>
          
        <StatusChart 
          data={data.statusDistribution} />
        </div>
    
        </Suspense>
        
         </div>
          <TimeRangeSelector />
        </div>
       
        </div>
  );
};

export default DashboardPage;