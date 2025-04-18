import React from 'react';
import { Delivery } from '../api/logisticsApi';

interface DeliveryTableRowProps {
  delivery: Delivery;
}

const DeliveryTableRow: React.FC<DeliveryTableRowProps> = React.memo(({ delivery }) => {
  return (
    <tr>
      <td>{delivery.orderId}</td>
      <td>{delivery.status}</td>
      <td>{delivery.destination}</td>
      <td>{delivery.estimatedDeliveryTime}</td>
      <td>{delivery.actualDeliveryTime || 'N/A'}</td>
      <td>{delivery.deliveryService}</td>
      <td>{delivery.courierStatus || 'N/A'}</td>
    </tr>
  );
});

export default DeliveryTableRow;