import React from 'react'
import ReactDOM from 'react-dom/client'
import ContextProvider from './context/index.jsx'
import { RouterProvider } from 'react-router-dom'
import { rotas } from './Routes.jsx'
import { Toaster } from 'react-hot-toast'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={rotas} />
    </ContextProvider>
  </React.StrictMode>
)
