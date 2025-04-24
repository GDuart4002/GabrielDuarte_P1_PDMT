import { useState } from 'react';
import axios from 'axios';

export interface Localidade {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  erro?: boolean;
}

interface BuscaProps {
  setLocalidades: React.Dispatch<React.SetStateAction<Localidade[]>>;
}

function Busca({ setLocalidades }: BuscaProps) {
  const [cep, setCep] = useState('');

  const handleSearch = async () => {
    if (!cep) {
      alert('Por favor, digite um CEP válido.');
      return;
    }

    try {
      const response = await axios.get<Localidade>(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        alert('CEP inválido. Tente novamente.');
      } else {
        setLocalidades((prev) => [response.data, ...prev]);
        console.log('Dados da localidade:', response.data);
      }
    } catch (error) {
      alert('Erro ao buscar o CEP. Verifique sua conexão ou tente novamente.');
      console.error('Erro:', error);
    }
  };

  return (
    <div className="p-d-flex p-flex-column p-ai-center p-mt-4">
      <input
        type="text"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        placeholder="Digite o CEP"
        className="p-inputtext p-mb-2"
      />
      <button className="p-button p-button-primary" onClick={handleSearch}>
        Buscar
      </button>
    </div>
  );
}

export default Busca;