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

export const fetchDeliveriesList = async (filters: any): Promise<{deliveries: Delivery[]; totalCount: number }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        deliveries: [
          {
            id: '1',
            orderId: '12345',
            status: 'pending',
            destination: 'New York',
            estimatedDeliveryTime: '2022-01-01 10:00',
            deliveryService: 'Service A',
            courierStatus: 'delivered',
          },
          {
            id: '2',
            orderId: '1002',
            status: 'in_transit',
            destination: 'City B',
            estimatedDeliveryTime: '2023-10-01T12:00:00Z',
            actualDeliveryTime: undefined,
            deliveryService: 'Service B',
            courierStatus: 'on the way',
          },
          {
            id: '3',
            orderId: '1003',
            status: 'problem',
            destination: 'City C',
            estimatedDeliveryTime: '2023-10-01T14:00:00Z',
            actualDeliveryTime: undefined,
            deliveryService: 'Service C',
            courierStatus: 'delayed',
          },
        ],
        totalCount: 3
      })
    }, 1000)
  })
}




export interface DeliveryFilters {
  status?:  'panding' | 'in_transit' | 'delivered' | 'problem';
  deliveryService?: string;
  dateRange?: string;
}



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