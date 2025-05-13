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
  status?:  'panding' | 'in_transit' | 'delivered' | 'problem';
  deliveryService?: string;
  dateRange?: string;
}

const allDeliveries: Delivery[] = [
{
      id: '1',
    orderId: '1001',
    status: 'delivered',
    destination: 'City A',
    estimatedDeliveryTime: '2023-10-01T10:00:00Z',
    actualDeliveryTime: '2023-10-01T09:30:00Z',
    deliveryService: 'Service A',
    courierStatus: 'delivered',
  },
  {
    id: '2',
    orderId: '1002',
    status: 'in_transit',
    destination: 'City B',
    estimatedDeliveryTime: '2023-10-02T12:00:00Z',
    deliveryService: 'Service B',
    courierStatus: 'on the way',
  },
  {
    id: '3',
    orderId: '1003',
    status: 'problem',
    destination: 'City C',
    estimatedDeliveryTime: '2023-10-03T14:00:00Z',
    deliveryService: 'Service C',
    courierStatus: 'delayed',
  },
  {
    id: '4',
    orderId: '1004',
    status: 'pending',
    destination: 'City D',
    estimatedDeliveryTime: '2023-10-04T15:00:00Z',
    deliveryService: 'Service A',
    courierStatus: 'pending',
  },
]


export const fetchDeliveriesList = async (filters: DeliveryFilters): Promise<{deliveries: Delivery[]; totalCount: number }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filtered = allDeliveries;
      if (filters.status) {
        filtered = filtered.filter((delivery) => delivery.status === filters.status);
      }
      if (filters.deliveryService) {
        filtered = filtered.filter((delivery) => delivery.deliveryService === filters.deliveryService);
      }

      const totalCount = filtered.length;
      const deliveries = filtered.slice(0, 10);

      resolve({deliveries, totalCount});
    
    }, 1000)
  })
}


export const fetchLogisticsSummary = async (timeRange: 'today' | 'week' | 'month',
  
) => {
  // Имитация запроса к API
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      const dataMap = {
        today: {
          totalDeliveries: 100,
          onTimePercentage: 90,
          averageDeliveryTime: '30 min',
          problemDeliveries: 5,
          statusDistribution: {
            inTransit: 50,
            delivered: 45,
            problem: 5,  
          },
        },
       week: {
          totalDeliveries: 1000,
          onTimePercentage: 85,
          averageDeliveryTime: '1 hour',
          problemDeliveries: 20,
          statusDistribution: {
            inTransit: 700,
            delivered: 250,
            problem: 50,  
          },
        },
        month: {
          totalDeliveries: 5000,
          onTimePercentage: 75,
          averageDeliveryTime: '2 hours',
          problemDeliveries: 100,
          statusDistribution: {
            inTransit: 3000,
            delivered: 2000,
            problem: 100,  
          }
        }
      }
      resolve(dataMap[timeRange]);
    }, 1000);
  });
};

export const fetchDeliveryServices = async () => {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => {
      resolve(['Service A', 'Service B', 'Service C']);
    }, 500);
  });
};