function LocalidadeLista() {
  const localidades = [
    { id: 1, nome: 'São Paulo', estado: 'SP' },
    { id: 2, nome: 'Rio de Janeiro', estado: 'RJ' },
    { id: 3, nome: 'Belo Horizonte', estado: 'MG' },
  ];

  return (
    <div className="p-d-flex p-flex-column p-ai-center p-mt-4">
      <h2>Localidades</h2>
      <ul>
        {localidades.map((localidade) => (
          <li key={localidade.id}>
            {localidade.nome} - {localidade.estado}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LocalidadeLista;