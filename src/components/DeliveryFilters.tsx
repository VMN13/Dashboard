import  { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setDeliveryFilter } from '../store/deliveriesUiSlice';

interface DeliveryFiltersProps {
  deliveryServices: string[] | undefined;
}
const DeliveryFilters: React.FC<DeliveryFiltersProps> = ({ deliveryServices }) => {
  const dispatch = useDispatch();
  const deliveryFilters = 
    useSelector((state: any) => 
      state.deliveriesUi.deliveryFilters);
  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setDeliveryFilter({ status: event.target.value as | 'pending' | 'in_transit' | 'delivered' | 'problem' }));
  };

  const handleServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setDeliveryFilter({ deliveryService: event.target.value }));
  };

  return (
    <div className="delivery-filters">
      <select className='handle-status-change' onChange={handleStatusChange}>
        <option value="">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="in_transit">In Transit</option>
        <option value="delivered">Delivered</option>
        <option value="problem">Problem</option>
      </select>
      <select className='handle-service-change' onChange={handleServiceChange}>
        <option value="">
          All Services
        </option>
        {deliveryServices?.map((service) => (
          <option 
            key={service} 
            value={service}>
                  {service}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DeliveryFilters;