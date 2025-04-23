import React, { useState } from 'react';
import Busca from './Busca';
import LocalidadeLista from './LocalidadeLista';

const App = () => {
    const [localidades, setLocalidades] = useState([]);

    const handleAddLocalidade = (novaLocalidade) => {
        setLocalidades([novaLocalidade, ...localidades]); // Adiciona a nova localidade no topo da lista
    };

    return (
        <div>
            <h1>Hello, P1</h1>
            <Busca onAddLocalidade={handleAddLocalidade} />
            <LocalidadeLista localidades={localidades} />
        </div>
    );
};

export default App;