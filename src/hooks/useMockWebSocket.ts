

import { useState, useEffect } from "react";

import {  useQueryClient } from "@tanstack/react-query";

type DeliveryStatus = "pending" | "in-transit" | "delivered" | "problem";

interface DeliveryStatusUpdate {
  id: string;
  status: DeliveryStatus;
  }

export function useMockWebSocket() {
  const queryClient = useQueryClient();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const statuses: DeliveryStatus[] = ["pending", "in-transit", "delivered", "problem"];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      const randomId = (Math.floor(Math.random() * 50) + 1).toString();
      const update: DeliveryStatusUpdate = { 
        id: randomId, 
        status: randomStatus ,
      };

      console.log('Mock WebSocket update:', update);

      queryClient.invalidateQueries({ queryKey: ['logisticsSummary'], exact: false });
      queryClient.invalidateQueries({ queryKey: ['deliveryStatus', randomId], exact: true });
      }, 2000);

    return () => clearInterval(intervalId);
  }, [queryClient]);
}

