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
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
      },
    ],
  };

  return (
    <div className="p-d-flex p-jc-center p-mt-4">
      <div style={{ width: '50%' }}>
        <h2>Distribuição por Estado</h2>
        <Pie data={data} />
      </div>
    </div>
  );
}

export default Grafico;