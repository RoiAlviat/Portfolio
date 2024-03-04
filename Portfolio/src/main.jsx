import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'
import Accueil from './Pages/Accueil.jsx'
import Contact from './Pages/Contact.jsx'
import Projets from './Pages/Projets.jsx'
import Profil from './Pages/Profil.jsx'
import Breakintheloop from './Pages/ProjectPages/Breakintheloop.jsx'
import Rooty from './Pages/ProjectPages/Rooty.jsx'
import Mao from './Pages/ProjectPages/Mao.jsx'
import Incredible from './Pages/ProjectPages/Incredible.jsx'
import Echo from './Pages/ProjectPages/Echo.jsx'

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
  },
  {
    path:"/profil",
    element: <Profil/>
  },
  {
    path:"/Breakintheloop",
    element: <Breakintheloop/>
  },
  {path:"/Rooty",
    element: <Rooty/>},
  {path:"/Mao",
    element: <Mao/>},
  {path:"/Incredible",
    element: <Incredible/>},
  {path:"/Echo",
    element: <Echo/>}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
