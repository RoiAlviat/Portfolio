import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'
import Accueil from './Pages/Accueil.jsx'
import Contact from './Pages/Contact.jsx'
import Projets from './Pages/Projets.jsx'
import Profil from './Pages/Profil.jsx'
import Redux from './Pages/ProjectPages/Redux.jsx'
import ReactPro from './Pages/ProjectPages/React.jsx'

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
    path: "/Redux",
    element: <Redux/>
  },
  {path:"/React",
element: <ReactPro/>}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
