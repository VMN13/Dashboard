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
        deliveries: [], // Здесь должны быть ваши данные
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
          delivered: 40,
          problem: 10,
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