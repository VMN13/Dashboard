import React from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);
interface StatusChartProps {
  data: {
    inTransit: number;
    delivered: number;
    problem: number;
  };
}

const StatusChart: React.FC<StatusChartProps> = ({ data }) => {
  const chartData = {
    labels: ['In Transit', 'Delivered', 'Problem'],
    datasets: [
      {
        data: [data.inTransit, data.delivered, data.problem],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default StatusChart;