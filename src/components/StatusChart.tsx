import React from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement } from 'chart.js'
import transitions from '@material-ui/core/styles/transitions';
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
        backgroundColor: ['rgb(203, 94, 121)', 'rgb(51, 170, 219)', 'rgb(255, 247, 0)'],
        hoverBackgroundColor: ['rgb(161, 7, 7)', 'rgb(36, 122, 187)', 'rgb(191, 144, 0)'],
        hoverBorderColor: 'rgb(0, 0, 0)',
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


  return <Pie   
    className='status-chart' 
    style={{width: '300px', height: '300px',}}  
    data={chartData} 
    width={300}
    height={300}
  />;
};

export default StatusChart;