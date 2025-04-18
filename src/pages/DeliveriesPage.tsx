import React from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { Delivery, fetchDeliveriesList, fetchDeliveryServices } from '../api/logisticsApi';
import { setDeliveryFilter } from '../store/deliveriesUiSlice';
import DeliveryFilters from '../components/DeliveryFilters';
import DeliveriesTable from '../components/DeliveriesTable';



const DeliveriesPage: React.FC = () => {
  const dispatch = useDispatch();
  const deliveryFilters = useSelector((state: any) => state.deliveriesUi.deliveryFilters);

  const { data: deliveriesData, isLoading: isLoadingDeliveries } = useQuery(['deliveries', deliveryFilters], () => fetchDeliveriesList(deliveryFilters), { keepPreviousData: true });
  const { data: deliveryServices, isLoading: isLoadingServices } = useQuery('deliveryServices', fetchDeliveryServices);

  if (isLoadingDeliveries || isLoadingServices) return <div>Loading...</div>;

  return (
    <div>
      <DeliveryFilters deliveryServices={[]} />
      <DeliveriesTable isLoading={isLoadingDeliveries} deliveries={[]} />
    </div>
  );
};

export default DeliveriesPage;