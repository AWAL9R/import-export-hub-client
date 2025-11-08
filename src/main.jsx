import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ErrorPage from './pages/ErrorPage';
import MainLayout from './layouts/MainLayout';
import AuthContextProvider from './context/AuthContextProvider';
import LoginPage from './pages/LoginPage';
import { Toaster } from 'react-hot-toast';
import PrivateComponent from './components/PrivateComponent';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path:"/me/exports",
        element: <PrivateComponent> Hello </PrivateComponent>
      },
      {
        path: "*",
        element: <ErrorPage />
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </StrictMode>,
)
