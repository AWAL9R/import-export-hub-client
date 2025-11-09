import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from './Loading';

const PrivateComponent = ({children}) => {
    const {loading, user}=useContext(AuthContext);
    const location=useLocation()

    if(loading)  return <Loading/>
    if(user?.uid) return children;
    
   const to="/login?next="+encodeURIComponent(location.pathname)
    return <Navigate to={to}/>
};

export default PrivateComponent;