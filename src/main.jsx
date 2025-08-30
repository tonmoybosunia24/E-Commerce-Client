import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { RouterProvider } from 'react-router'
import Routes from './Routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast';

// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='lg:max-w-screen-xl mx-auto'>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={Routes}></RouterProvider>
          <Toaster />
        </HelmetProvider>
      </QueryClientProvider>
    </div>
  </StrictMode>,
);