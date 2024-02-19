import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'
import Accueil from './Pages/Accueil.jsx'
import Contact from './Pages/Contact.jsx'
import Projets from './Pages/Projets.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Accueil/>
  },
  {
    path:"/contact",
    element: <Contact/>
  },
  {
    path:"/projets",
    element: <Projets/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
