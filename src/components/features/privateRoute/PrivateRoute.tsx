import { Route, Navigate } from 'react-router-dom';
import { useAppSelector } from '@src/hooks';
import React from "react";

interface PrivateRouteProps {
    path: string;
    element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ path, element }) => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    return isAuthenticated ? (
        <Route path={path} element={element} />
    ) : (
        <Navigate to="/loginpage" replace />
    );
}

export default PrivateRoute;
