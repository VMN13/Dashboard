import React from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement, plugins, Tooltip, Legend} from 'chart.js'
Chart.register(ArcElement);
interface StatusChartProps {
  data: Record<string, number>
}

const StatusChart: React.FC<StatusChartProps> = ({ data }) => {
  const chartData: any = {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data),
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
        hoverBackgroundColor: ['#31B0D5', '#FF7F7F', '#FFD700'],
        hoverBorderColor: 'rgb(161, 7, 7)',
        borderColor: 'rgb(0, 0, 0)',
        borderWidth: 1.5,
        cutout: '20%',
        animation: {
          animateRotate: true,
          animateScale: true,
        },
      },
    ],
  };

  return  <Pie   
    className='status-chart' 
    style={{width: '300px', height: '300px',}}  
    data={chartData} 
    width={300}
    height={300}
  />;
};

export default StatusChart;