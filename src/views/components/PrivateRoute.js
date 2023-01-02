import React from 'react';
import {  Navigate } from 'react-router-dom';



export default function PrivateRoute({ children }) {
    const authState = JSON.parse(localStorage.getItem("authState"));

    if(authState?.isAuthenticated){
        return children;
    }else{
        return <Navigate to="/" />;
    }

}
