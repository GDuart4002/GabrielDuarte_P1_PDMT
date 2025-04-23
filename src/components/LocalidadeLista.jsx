import React from 'react';

const LocalidadeLista = ({ localidades }) => {
    return (
        <div>
            <h2>Localidades Encontradas</h2>
            <ul>
                {localidades.map((localidade, index) => (
                    <li key={index}>
                        {localidade.logradouro}, {localidade.bairro}, {localidade.localidade} - {localidade.uf}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LocalidadeLista;