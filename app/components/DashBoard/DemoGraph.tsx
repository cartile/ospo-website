import React from 'react';
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  

export default function DemoGraph({timePeriod} : {timePeriod:string}) {
    const options = {
      responsive: true,
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
    
      },
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: `Applications in ${timePeriod.toLowerCase()}`,
        },
        maintainAspectRatio: false,
        aspectRatio: 1
      },
    };

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth()
    const labels = months.slice(currentMonth + 1).concat(months.slice(0, currentMonth + 1));

    const data = {
      labels,
      datasets: [
        {
          label: 'Jobs Applied',
          data: labels.map(() => faker.number.int({ min: 0, max: 40 })),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };
    return (
        <Bar style={{ width: "450px" }} options={options} data={data} />
    )
}