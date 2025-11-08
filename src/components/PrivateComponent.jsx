import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateComponent = ({children}) => {
    const {loading, user}=useContext(AuthContext);
    const location=useLocation()
    if(loading) return <div>Loading</div>
    if(user?.uid) return children;
    
   const to="/login?next="+encodeURIComponent(location.pathname)
    return <Navigate to={to}/>
};

export default PrivateComponent;