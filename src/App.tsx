import Busca from './components/Busca';
import LocalidadeLista from './components/LocalidadeLista';

function App() {
  return (
    <div className="p-d-flex p-flex-column p-ai-center" style={{ height: '100vh' }}>
      <h1>Hello, P1</h1>
      <Busca />
      <LocalidadeLista />
    </div>
  );
}

export default App;
