import { useState } from 'react';

function Busca() {
  const [cep, setCep] = useState('');

  const handleSearch = () => {
    alert(`CEP digitado: ${cep}`);
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