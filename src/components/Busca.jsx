import React, { useState } from 'react';

const Busca = () => {
    const [cep, setCep] = useState('');

    const handleSearch = () => {
        alert(`CEP digitado: ${cep}`);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Digite o CEP"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    );
};

export default Busca;