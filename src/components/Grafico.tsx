import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Localidade } from './Busca';

ChartJS.register(ArcElement, Tooltip, Legend);

interface GraficoProps {
  localidades: Localidade[];
}

function Grafico({ localidades }: GraficoProps) {
  const estados = localidades.reduce((acc, localidade) => {
    acc[localidade.uf] = (acc[localidade.uf] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const data = {
    labels: Object.keys(estados),
    datasets: [
      {
        data: Object.values(estados),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#8E44AD',
          '#2ECC71',
          '#E74C3C',
          '#3498DB',
          '#F1C40F',
          '#1ABC9C',
          '#9B59B6',
          '#34495E',
          '#D35400',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#8E44AD',
          '#2ECC71',
          '#E74C3C',
          '#3498DB',
          '#F1C40F',
          '#1ABC9C',
          '#9B59B6',
          '#34495E',
          '#D35400',
        ],
      },
    ],
  };

  return (
    <div className="p-d-flex p-jc-center" style={{ width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '300px', margin: '0 auto' }}>
        <Pie data={data} />
      </div>
    </div>
  );
}

export default Grafico;