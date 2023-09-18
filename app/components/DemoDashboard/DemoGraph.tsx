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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export default function DemoGraph({timePeriod} : {timePeriod : string}) {
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
    const weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const currentDate = new Date();
    const currentDay = currentDate.getDay()
    const currentMonth = currentDate.getMonth()
   
    const yearlyLabels = months.slice(currentMonth + 1).concat(months.slice(0, currentMonth + 1));
    const yearlyData = ["26", "53", "2", "11", "14", "58", "44", "32", "11", "70", "22", "57"]

    const monthlyLabels = ['3 Weeks Ago', '2 Weeks Ago', '1 Week Ago', 'Current Week']
    const monthlyData = ["15", "13", "4", "18"]

    const weeklyLabels = weeks.slice(0, currentDay).concat(weeks.slice(currentDay))
    const weeklyData = ["4", "2", "2", "1", "2", "1", "3"]

    const usedInfo = () =>{
      if (timePeriod==="Last 7 days") {
        return [weeklyLabels, weeklyData]
      }
      else if (timePeriod==="Last 30 days") {
        return [monthlyLabels, monthlyData]
      } else {
        return [yearlyLabels, yearlyData]
      }
    }

    const [usedLabels, usedData] = usedInfo()

    const data = {
      labels: usedLabels,
      datasets: [
        {
          label: 'Jobs Applied',
          data: usedData,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };
    return (
        <Bar style={{ width: "450px" }} options={options} data={data} />
    )
}