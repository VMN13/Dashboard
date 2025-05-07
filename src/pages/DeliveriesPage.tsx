import React from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { Delivery, fetchDeliveriesList, fetchDeliveryServices } from '../api/logisticsApi';
import DeliveryFilters from '../components/DeliveryFilters';
import DeliveriesTable from '../components/DeliveriesTable';


const DeliveriesPage: React.FC = () => {
  const dispatch = useDispatch();
  const deliveryFilters = 
    useSelector((state: any) => state.deliveriesUi.deliveryFilters);

  const { data: deliveriesData, isLoading: isLoadingDeliveries, isError: isErrorDeliveries } = 
    useQuery(['deliveriesList', deliveryFilters], 
    () => fetchDeliveriesList(deliveryFilters), { keepPreviousData: true });
    
  const { data: deliveryServicesData, isLoading: isLoadingServices } = 
    useQuery('deliveryServices', fetchDeliveryServices);
  
  if (isLoadingDeliveries || isLoadingServices) 
    return <div>Loading...</div>;

  if (isErrorDeliveries) {
    return <div>Error</div>;
  }
  

  return (
    <div>
      <DeliveryFilters deliveryServices={deliveryServicesData} />
      <DeliveriesTable deliveries={deliveriesData?.deliveries} isLoading={isLoadingDeliveries} />
    </div>
  );
};

export default DeliveriesPage;