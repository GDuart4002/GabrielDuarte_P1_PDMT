import React, { useState } from 'react';
import axios from 'axios';

const Busca = ({ onAddLocalidade }) => {
    const [cep, setCep] = useState('');

    const handleSearch = async () => {
        if (!cep) {
            alert('Por favor, digite um CEP válido.');
            return;
        }

        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (response.data.erro) {
                alert('CEP inválido. Tente novamente.');
            } else {
                console.log('Dados da localidade:', response.data);
                onAddLocalidade(response.data); // Envia os dados para o componente pai
            }
        } catch (error) {
            alert('Erro ao buscar o CEP. Verifique sua conexão ou tente novamente.');
        }
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