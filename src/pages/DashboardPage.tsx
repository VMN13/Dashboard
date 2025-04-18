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

  const { data, isLoading, isError } = useQuery(['logisticsSummary', dashboardTimeRange], () => fetchLogisticsSummary(dashboardTimeRange));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  return (
    <div>
      <TimeRangeSelector />
      <MetricCard title="Total Deliveries" value={data.totalDeliveries} isLoading={isLoading} />
      <MetricCard title="On Time Percentage" value={`${data.onTimePercentage}%`} isLoading={isLoading} />
      <MetricCard title="Average Delivery Time" value={data.averageDeliveryTime} isLoading={isLoading} />
      <MetricCard title="Problem Deliveries" value={data.problemDeliveries} isLoading={isLoading} />
      <StatusChart data={data.statusDistribution} />
    </div>
  );
};

export default DashboardPage;