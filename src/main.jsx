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
import RegisterPage from './pages/RegisterPage';
import AddExports from './pages/AddExports';
import ProductPage from './pages/ProductPage';
import { SERVER_URL } from './settings';
import MyExports from './pages/MyExports';

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
        path: "/register",
        element: <RegisterPage />
      },
      {
        path:"/products/:id",
        loader:({params})=>fetch(SERVER_URL+`/products/${params.id}`),
        element: <PrivateComponent> <ProductPage/> </PrivateComponent>
      },
      {
        path:"/me/exports",
        element: <PrivateComponent> <MyExports/> </PrivateComponent>
      },
      {
        path:"/add/exports",
        element: <PrivateComponent> <AddExports key="add" /> </PrivateComponent> 
      },
      {
        path:"/editProduct/:id",
        loader:({params})=>fetch(SERVER_URL+`/products/${params.id}`),
        element: <PrivateComponent> <AddExports key="edit" /> </PrivateComponent> 
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
