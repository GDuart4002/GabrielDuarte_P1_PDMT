import 'primeflex/primeflex.css'; // Estilos do PrimeFlex
import 'primereact/resources/themes/saga-blue/theme.css'; // Tema PrimeReact
import 'primereact/resources/primereact.min.css'; // Estilos principais
import 'primeicons/primeicons.css'; // Ícones PrimeIcons
import './index.css'; // Seus estilos globais

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
