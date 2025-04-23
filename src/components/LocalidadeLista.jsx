import React from 'react';

const LocalidadeLista = () => {
    const localidades = [
        { id: 1, nome: 'São Paulo - SP' },
        { id: 2, nome: 'Rio de Janeiro - RJ' },
        { id: 3, nome: 'Belo Horizonte - MG' },
        { id: 4, nome: 'Curitiba - PR' },
        { id: 5, nome: 'Porto Alegre - RS' },
    ];

    return (
        <div>
            <h2>Localidades</h2>
            <ul>
                {localidades.map((localidade) => (
                    <li key={localidade.id}>{localidade.nome}</li>
                ))}
            </ul>
        </div>
    );
};

export default LocalidadeLista;