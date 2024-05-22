import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Tarefas from './tarefas/tarefas-componente.jsx'
import Cabecalho from './componente-cabecalho/cabecalho.jsx'
import ConsultaRAM from './consulta-ram/consulta-ram.jsx'
import DetalhesPersonagem from './detalhes-personagens/Detalhes-Personagens.jsx';
import Localizacoes from './localizacoes/Localizacoes.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Cabecalho />,
    children: [
      {
        path: '/consulta-ram',
        element: <ConsultaRAM/>
      },
      {
        path: '/consulta-ram/:id',
        element: <DetalhesPersonagem />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
);
