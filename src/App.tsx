import './App.css';
import Busca from './components/Busca';
import Grafico from './components/Grafico';
import LocalidadeLista from './components/LocalidadeLista';
import { useState } from 'react';
import { Localidade } from './components/Busca';

function App() {
  const [localidades, setLocalidades] = useState<Localidade[]>([]);

  return (
    <div className="p-grid p-dir-col p-align-center" style={{ minHeight: '100vh' }}>
      <div className="p-col">
        <h1>Hello, P1</h1>
      </div>
      <div className="p-col">
        <Busca setLocalidades={setLocalidades} />
      </div>
      <div className="p-col">
        <LocalidadeLista localidades={localidades} />
      </div>
      <div className="p-col">
        <Grafico localidades={localidades} />
      </div>
    </div>
  );
}

export default App;
