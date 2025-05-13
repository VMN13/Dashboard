import React, {useMemo} from 'react';
import DeliveryTableRow from './DeliveryTableRow';
import { Delivery } from '../api/logisticsApi';

interface DeliveriesTableProps {
  deliveries: Delivery[] | undefined;
  isLoading: boolean;
}

const DeliveriesTable: React.FC<DeliveriesTableProps> = ({ deliveries, isLoading }) => {
  if (isLoading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className='deliveries-table'>
    <table>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Status</th>
          <th>Destination</th>
          <th>Estimated Delivery Time</th>
          <th>Actual Delivery Time</th>
          <th>Delivery Service</th>
          <th>Courier Status</th>
        </tr>
      </thead>
      <tbody>
      {deliveries?.map((delivery) => (
          <DeliveryTableRow 
            key={delivery.id} 
            delivery={delivery} />
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default DeliveriesTable;