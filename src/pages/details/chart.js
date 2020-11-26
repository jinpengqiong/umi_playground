import { useEffect } from 'react'
import { Row, Col, List, Avatar, Button } from 'antd';
import Chart from 'chart.js'
import styles from './index.less';

export const ChartComponent = props => {
  useEffect(() => {
    const ctx = document.getElementById('myChart')?.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Agent',
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            data: [2, 12, -12, -5, -2, 7, 0],
            fill: false,
          },
          {
            label: 'Caller',
            fill: false,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            data: [9, 3, 2, -4, -3, -10, 3],
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: true,
            },
          ],
        },
        legend: {
          display: true,
        },
        title: {
          text: 'Call Sentiment over time',
          display: true,
          position: 'bottom',
        },
      },
    });
    console.log('ctx', ctx)
  }, [])

  return (
      <canvas id="myChart" width='200' height="100"></canvas>
  );
};
