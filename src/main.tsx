import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Panel from './pages/panel/panel.tsx'
import Payments from './pages/payments/payments.tsx'
import Roadmaps from './pages/roadmaps/roadmaps.tsx'
import Tasks from './pages/tasks/tasks.tsx'
import Users from './pages/users/users.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/panel',
        element: <Panel />
      },
      {
        path: '/payments',
        element: <Payments />
      },
      {
        path: '/roadmaps',
        element: <Roadmaps />
      },
      {
        path: '/tasks',
        element: <Tasks />
      },
      {
        path: '/users',
        element: <Users />
      }
    ]
  },

])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
