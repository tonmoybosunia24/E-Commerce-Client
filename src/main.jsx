import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { RouterProvider } from 'react-router'
import Routes from './Routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer, Zoom } from 'react-toastify'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='lg:max-w-screen-xl mx-auto'>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={Routes}></RouterProvider>
          <ToastContainer position="top-center" autoClose={3000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" transition={Zoom} />
        </HelmetProvider>
      </QueryClientProvider>
    </div>
  </StrictMode>,
);