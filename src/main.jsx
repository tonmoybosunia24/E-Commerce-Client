import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Routes from './Routes/Routes.jsx'
import AuthProviders from './Providers/AuthProviders.jsx'
import { ToastContainer, Zoom } from 'react-toastify'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <HelmetProvider>
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" transition={Zoom} />
        <RouterProvider router={Routes}></RouterProvider>
      </HelmetProvider>
    </AuthProviders>
  </StrictMode>,
)
