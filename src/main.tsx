import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './assets/fonts/Geist-Black.woff2'
import './assets/fonts/Geist-Bold.woff2'
import './assets/fonts/Geist-SemiBold.woff2'
import './assets/fonts/Geist-Medium.woff2'
import './assets/fonts/Geist-Regular.woff2'
import './assets/fonts/Geist-Thin.woff2'
import './assets/fonts/Geist-Light.woff2'
import './assets/fonts/Geist-UltraLight.woff2'
import './fonts.scss'
import './index.scss'
import Home from './pages/Home.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
