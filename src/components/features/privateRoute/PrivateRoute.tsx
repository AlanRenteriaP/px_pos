import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// This is a simple check for the key. In a real-world application, this would involve more complex
// logic, and possibly communicating with a backend server to verify the user's key.
const isAuthenticated = () => {
    const key = localStorage.getItem('dashboardKey');
    return key;
};

interface PrivateRouteProps {
    path: string;
    element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, path }) => {
    return (
        <Route path={path} element={isAuthenticated() ? element : <Navigate to="/loginpage" />} />
    );
};

export default PrivateRoute;
