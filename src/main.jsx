import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cabecalho from './componente-cabecalho/cabecalho.jsx';
import ConsultaRAM from './consulta-ram/consulta-ram.jsx';
import DetalhesPersonagem from './detalhes-personagens/Detalhes-Personagens.jsx';
import Localizacoes from './localizacoes/Localizacoes.jsx';
import DetalhesEpisodios from './detalhes-episodios/Detalhes-Episodios.jsx';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Cabecalho />,
    children: [
      {
        path: '/consulta-ram',
        element: <ConsultaRAM />
      },
      {
        path: '/consulta-ram/:id',
        element: <DetalhesPersonagem />
      },
      {
        path: '/episodio/:id',
        element: <DetalhesEpisodios />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
);
