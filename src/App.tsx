import Busca from './components/Busca';
import Grafico from './components/Grafico';
import LocalidadeLista from './components/LocalidadeLista';
import { useState } from 'react';
import { Localidade } from './components/Busca';

function App() {
  const [localidades, setLocalidades] = useState<Localidade[]>([]);

  return (
    <div className="p-d-flex p-flex-column p-ai-center" style={{ height: '100vh' }}>
      <h1>Hello, P1</h1>
      <Busca setLocalidades={setLocalidades} />
      <LocalidadeLista localidades={localidades} />
      <Grafico localidades={localidades} />
    </div>
  );
}

export default App;
