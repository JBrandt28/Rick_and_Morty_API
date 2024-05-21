import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Tarefas from './tarefas/tarefas-componente.jsx'
import Cabecalho from './componente-cabecalho/cabecalho.jsx'
import ConsultaRAM from './consulta-ram/consulta-ram.jsx'
import DetalhesPersonagem from './DetalhesPersonagem';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Cabecalho />,
    children: [
      {
        path: '/tarefas',
        element: <Tarefas />
      },
      {
        path: '/rota2',
        element: <h1>Minha rota 2</h1>
      },
      {
        path: '/consulta-ram',
        element: <ConsultaRAM/>
      },
      {
        path: '/detalhes-personagens/:id',
        element: <DetalhesPersonagem />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root'))
.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
