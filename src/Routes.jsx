import { createBrowserRouter } from 'react-router-dom'
import Home from './paginas/Home'
import Cadastro from './paginas/Cadastro'
import PaginaPadrao from './paginas/PaginaPadrao'
import Video from './paginas/Video'
import { buscarVideoPorId } from './api/Api'

export const rotas = createBrowserRouter([
  {
    path: "/", element: <PaginaPadrao />,
    children: [
      { index: true, element: <Home /> },
      { path: "cadastro", element: <Cadastro /> },
      { path: "video/:id", element: <Video />, loader: buscarVideoPorId }
    ]
  }
])
