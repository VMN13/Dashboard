export interface Delivery {
  id: string;
  orderId: string;
  status: 'pending' | 'in_transit' | 'delivered' | 'problem';
  destination: string;
  estimatedDeliveryTime: string;
  actualDeliveryTime?: string;
  deliveryService: string;
  courierStatus?: string;
}

export interface DeliveryFilters {
  status?: string;
  deliveryService?: string;
  dateRange?: string;
}

export const fetchDeliveriesList = async (filters: DeliveryFilters) => {
  // Имитация запроса к API
  return new Promise<{ deliveries: Delivery[]; totalCount: number }>((resolve) => {
    setTimeout(() => {
      resolve({
        deliveries: [
          {
            id: '1',
            orderId: '123',
            status: 'in_transit',
            destination: 'New York',
            estimatedDeliveryTime: '2023-06-01 10:00',
            actualDeliveryTime: '2023-06-01 11:00',
            deliveryService: 'UPS',
            courierStatus: 'On the way',
          },
          {
            id: '2',
            orderId: '456',
            status: 'delivered',
            destination: 'Los Angeles',
            estimatedDeliveryTime: '2023-06-02 14:00',
            actualDeliveryTime: '2023-06-02 15:00',
            deliveryService: 'FedEx',
            courierStatus: 'Delivered',
          },
          {
            id: '3',
            orderId: '789',
            status: 'pending',
            destination: 'San Francisco',
            estimatedDeliveryTime: '2023-06-03 09:00',
            deliveryService: 'DHL',
            courierStatus: 'Pending',
          }
        ], // Здесь должны быть ваши данные
        totalCount: 0,
      });
    }, 1000);
  });
};

export const fetchLogisticsSummary = async (timeRange: string) => {
  // Имитация запроса к API
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve({
        totalDeliveries: 100,
        onTimePercentage: 90,
        averageDeliveryTime: '30 min',
        problemDeliveries: 5,
        statusDistribution: {
          inTransit: 50,
          delivered: 45,
          problem: 5,  
        },
      });
    }, 1000);
  });
};

export const fetchDeliveryServices = async () => {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => {
      resolve(['Service A', 'Service B', 'Service C']);
    }, 1000);
  });
};