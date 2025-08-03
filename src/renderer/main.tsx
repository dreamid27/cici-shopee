import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import BaseLayout from './components/layout'
import { HomePage, AboutPage } from './pages/index'

const router = createBrowserRouter([
  {
    path: '/',
    Component: BaseLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'about', Component: AboutPage }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
)
