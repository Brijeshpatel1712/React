import React from 'react'
import Addproduct from './addproduct';
import Login from './Login';
import { Navigate } from 'react-router-dom';

const Privetpage = ({children}) => {
   

    const isAuthenticated = localStorage.getItem("token");
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    return children;
}

export default Privetpage