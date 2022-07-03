import { useContext, useEffect } from 'react';
import { SocketContext } from '../context/socketContext';
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
import { useState } from 'react';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BrandChart = () => {
  const { socket } = useContext(SocketContext);

  const [bands, setBands] = useState([]);

  useEffect(() => {
    socket.on('band-list', (bands) => {
      setBands(bands);
    });

    return () => socket.off('band-list');
  }, [socket]);

  const data = {
    labels: bands.map(({ name }) => name),
    datasets: [
      {
        label: '# of Votes',
        data: bands.map(({ votes }) => votes),
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
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return <Bar options={options} data={data} />;
};
