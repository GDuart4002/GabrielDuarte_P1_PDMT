import { useState } from 'react';
import axios from 'axios';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { gerarCEPAleatorio } from '../utils/CEPAleatorio'; // Importa a função de geração de CEP aleatório

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

  const handleRandomSearch = async () => {
    const randomCeps = Array.from({ length: 10 }, () => gerarCEPAleatorio()); // Gera 10 CEPs aleatórios
    const localidades: Localidade[] = [];

    for (const randomCep of randomCeps) {
      try {
        const response = await axios.get<Localidade>(`https://viacep.com.br/ws/${randomCep}/json/`);
        if (!response.data.erro) {
          localidades.push(response.data); // Adiciona apenas CEPs válidos
          console.log('Dados da localidade (aleatório):', response.data);
        }
      } catch (error) {
        console.error('Erro ao buscar o CEP aleatório:', randomCep, error);
      }
    }

    setLocalidades((prev) => [...localidades, ...prev]); // Adiciona as localidades válidas ao estado
  };

  return (
    <div className="p-d-flex p-flex-column p-ai-center p-jc-center p-mt-4" style={{ width: '100%' }}>
      <div className="p-inputgroup p-mb-3" style={{ maxWidth: '400px', width: '100%' }}>
        <InputText
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          placeholder="Digite o CEP"
          className="p-inputtext"
        />
      </div>
      <Button
        label="Buscar"
        icon="pi pi-check"
        onClick={handleSearch}
        className="p-button p-mt-3"
        style={{ marginTop: '1rem' }}
      />
      <Button
        label="Buscar 10 CEPs Aleatórios"
        icon="pi pi-random"
        onClick={handleRandomSearch}
        className="p-button p-mt-3"
        style={{ marginTop: '1rem' }}
      />
    </div>
  );
}

export default Busca;