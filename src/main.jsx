import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'

import Schedule from './Schedule/Schedule'
import Employees from './Employees/Employees'
import DepoRoutes from './DepoRoutes/DepoRoutes'
import Buses from './Buses/Buses'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Schedule />,
  },
  {
    path: '/employees',
    element: <Employees />,
  },
  {
    path: '/deporoutes',
    element: <DepoRoutes />,
  },
  {
    path: '/buses',
    element: <Buses />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
