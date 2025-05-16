import React, { Suspense, lazy} from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeliveriesList, fetchDeliveryServices } from '../api/logisticsApi';
import DeliveryFilters from '../components/DeliveryFilters';
const DeliveriesTable = lazy(() => import('../components/DeliveriesTable'));
const DeliveriesPage: React.FC = () => {
  const dispatch = useDispatch();
  const deliveryFilters = useSelector((state: any) => 
      state.deliveriesUi.deliveryFilters);

  const { data: deliveriesData, isLoading: isLoadingDeliveries, isError: isErrorDeliveries } = 
    useQuery(['deliveriesList', deliveryFilters], 
    () => 
      fetchDeliveriesList(deliveryFilters), 
      { keepPreviousData: true });
    
  const { data: deliveryServicesData, isLoading: isLoadingServices } = 
    useQuery('deliveryServices', fetchDeliveryServices);
  
  if (isLoadingDeliveries || isLoadingServices) 

    return <div className="lds-facebook"><div></div><div></div><div></div></div>;

  if (isErrorDeliveries) {
    return <div className='error'>Error</div>;
  }
  
  return (
    <div>
      <DeliveryFilters 
        deliveryServices={deliveryServicesData} />
      <Suspense fallback={<div className="lds-facebook"><div></div><div></div><div></div></div>}>
      <DeliveriesTable 
        deliveries={deliveriesData?.deliveries} 
        isLoading={isLoadingDeliveries} />
        </Suspense>
    </div>
  );
};

export default DeliveriesPage;