import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ErrorPage from './pages/ErrorPage';
import MainLayout from './layouts/MainLayout';
import AuthContextProvider from './context/AuthContextProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [

    ]
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </StrictMode>,
)
