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
    <table>
      <thead>
        <tr>
          <th id='1'>Order ID</th>
          <th id='2'>Status</th>
          <th id='3'>Destination</th>
          <th id='4'>Estimated Delivery Time</th>
          <th id='5'>Actual Delivery Time</th>
          <th id='6'>Delivery Service</th>
          <th id='7'>Courier Status</th>
        </tr>
      </thead>
      <tbody>
      {deliveries?.map((delivery) => (
          <DeliveryTableRow key={delivery.id} delivery={delivery} />
        ))}
      </tbody>
    </table>
  );
};

export default DeliveriesTable;