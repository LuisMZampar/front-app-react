import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//ROTAS
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Produtos from './routes/Produto.jsx'

const routes = createBrowserRouter([
  { path: "/", element: <App/>,
  children:[
    {path: "/", element: <Home/>},
    {path: "/produtos", element: <Produtos/>},
  ]
  }
]);

//ROTAS



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
