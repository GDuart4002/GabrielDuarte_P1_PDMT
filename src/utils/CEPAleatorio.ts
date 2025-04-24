export const gerarCEPAleatorio = (): string => {
  // Faixas de CEP válidas mais confiáveis
  const cepRanges = [
    { start: 1000, end: 5999 }, // SP Capital
    { start: 8000, end: 8499 }, // SP Capital
    { start: 20000, end: 23799 }, // RJ Capital
    { start: 29000, end: 29099 }, // Vitória (ES)
    { start: 30000, end: 31999 }, // Belo Horizonte (MG)
    { start: 40000, end: 41999 }, // Salvador (BA)
    { start: 50000, end: 52999 }, // Recife (PE)
    { start: 57000, end: 57099 }, // Maceió (AL)
    { start: 58000, end: 58099 }, // João Pessoa (PB)
    { start: 59000, end: 59099 }, // Natal (RN)
    { start: 60000, end: 60999 }, // Fortaleza (CE)
    { start: 64000, end: 64099 }, // Teresina (PI)
    { start: 65000, end: 65099 }, // São Luís (MA)
    { start: 66000, end: 66999 }, // Belém (PA)
    { start: 69000, end: 69099 }, // Manaus (AM)
    { start: 70000, end: 70999 }, // Brasília (DF)
    { start: 74000, end: 74894 }, // Goiânia (GO)
    { start: 77000, end: 77270 }, // Palmas (TO)
    { start: 78000, end: 78109 }, // Cuiabá (MT)
    { start: 79000, end: 79129 }, // Campo Grande (MS)
    { start: 80000, end: 82999 }, // Curitiba (PR)
    { start: 88000, end: 88469 }, // Florianópolis (SC)
    { start: 90000, end: 91999 }, // Porto Alegre (RS)
  ];

  // Seleciona uma faixa aleatória
  const randomRange = cepRanges[Math.floor(Math.random() * cepRanges.length)];
  const randomCep = `${Math.floor(
    randomRange.start + Math.random() * (randomRange.end - randomRange.start)
  )
    .toString()
    .padStart(5, '0')}-000`;

  return randomCep;
};