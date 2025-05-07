import React from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement, CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend, } from 'chart.js';
import "chartjs-plugin-datalabels";
import { setLabels } from 'react-chartjs-2/dist/utils';
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register Chart.js components and plugins
Chart.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels // Register the DataLabels plugin
);
interface StatusChartProps {
  data: Record<string, number>
}

const StatusChart: React.FC<StatusChartProps> = ({ data }) => {
  
  const options:any = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      datalabels: {
        color: "black", // Label color
        anchor: "end", // Position the label near the bar's edge
        align: "top", // Align the label to the top of the bar
        formatter: (value: any) => value, // Format the label (e.g., show the value)
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
 

  const chartData: any = {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data),
        redraw: true,
        fallbackContent: '',
        hoverOffset: 4,
        borderAlign: 'center',
        display: true,
        hoverBorderWidth: 2,
      
        backgroundColor: ['rgb(203, 94, 121)', 'rgb(0, 0, 0)', 'rgb(255, 255, 255)'],
        updateMode: 'active',
        hoverBackgroundColor: ['rgb(203, 94, 148)', 'rgb(47, 50, 53)', 'rgb(176, 176, 176)'],
        hoverBorderColor: 'rgb(0, 0, 0)',
        borderColor: 'rgb(0, 0, 0)',
        borderWidth: 1.5,
        cutout: '25%',
        
        animation: {
          animateRotate: true,
          animateScale: true,
          animateColor: true,
          duration: 1000,
          easing: 'easeOutQuart',
          delay: 0,    
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
    options={options}
  />;
};

export default StatusChart;