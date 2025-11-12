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
import { AppName, SERVER_URL } from './settings';
import MyExports from './pages/MyExports';
import HomePage from './pages/HomePage';
import LoadingError from './components/LoadingError';
import Loading from './components/Loading';
import MyImports from './pages/MyImports';
import AllProductPage from './pages/AllProductPage';
import Title from './components/Title';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <LoadingError />,
    HydrateFallback:Loading,
    children: [
      {
        index: true,
        HydrateFallback:Loading,
        errorElement: <LoadingError />,
        element: <HomePage key='home' fkey="home" />
      },
      {
        path:"/all",
        HydrateFallback:Loading,
        errorElement: <LoadingError />,
        element: <AllProductPage key='all' fkey="all" />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/register",
        element: <RegisterPage />
      },
      {
        path: "/products/:id",
        HydrateFallback:Loading,
        errorElement: <LoadingError />,
        loader: ({ params }) => fetch(SERVER_URL + `/products/${params.id}`),
        element: <PrivateComponent> <ProductPage /> </PrivateComponent>
      },
      {
        path: "/me/exports",
        element: <PrivateComponent> <MyExports /> </PrivateComponent>
      },
      {
        path: "/me/imports",
        element: <PrivateComponent> <MyImports /> </PrivateComponent>
      },
      {
        path: "/add/exports",
        element: <PrivateComponent> <AddExports key="add" /> </PrivateComponent>
      },
      {
        path: "/editProduct/:id",
        HydrateFallback:Loading,
        errorElement: <LoadingError />,
        loader: ({ params }) => fetch(SERVER_URL + `/products/${params.id}`),
        element: <PrivateComponent> <Title value={`${AppName} - Edit Product`}></Title> <AddExports key="edit" /> </PrivateComponent>
      },
      {
        path: "*",
        element: <div> <Title value={`${AppName} - Application Error`}></Title> <ErrorPage /> </div>
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
