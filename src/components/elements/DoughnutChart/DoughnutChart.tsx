import { Doughnut } from 'react-chartjs-2';

import { Container } from './DoughnutChart.style';

interface ContentData {
  labels: string[];
  datasets: [
    {
      label: string;
      data: number[];
    }
  ];
}

interface DoughnutChartProps {
  data: ContentData;
}

const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right',
      labels: {
        boxWidth: 10,
        boxHeight: 10,
        pointStyle: 'circle',
        font: {
          size: 16,
          family: 'Lexend',
          weight: 500,
          lineHeight: 2,
        },
      },
    },
  },
};

const DoughnutChart: React.FC<DoughnutChartProps> = ({ data }) => {
  const dataModel = {
    labels: data.labels,
    datasets: [
      {
        label: data.datasets[0].label,
        data: data.datasets[0].data,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
      },
    ],
  };

  return (
    <Container>
      <Doughnut
        data={{ ...dataModel }}
        width={200}
        height={200}
        options={{ ...options }}
      />
    </Container>
  );
};

export default DoughnutChart;
