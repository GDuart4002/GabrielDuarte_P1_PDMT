import { Localidade } from './Busca';

interface LocalidadeListaProps {
  localidades: Localidade[];
}

function LocalidadeLista({ localidades }: LocalidadeListaProps) {
  return (
    <div className="p-d-flex p-flex-column p-ai-center p-mt-4">
      <h2>Localidades Encontradas</h2>
      {localidades.length === 0 ? (
        <p>Nenhuma localidade encontrada.</p>
      ) : (
        <ul>
          {localidades.map((localidade, index) => (
            <li key={index}>
              {localidade.logradouro}, {localidade.bairro}, {localidade.localidade} - {localidade.uf}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LocalidadeLista;