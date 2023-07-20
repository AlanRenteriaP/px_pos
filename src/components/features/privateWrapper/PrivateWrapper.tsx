import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useAppSelector } from '@src/hooks';

interface PrivateWrapperProps {
    children: React.ReactNode;
}

const PrivateWrapper: React.FC<PrivateWrapperProps> = ({ children }) => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/loginpage');
        }
    }, [isAuthenticated, navigate]);

    return isAuthenticated ? <>{children}</> : null;
};

export default PrivateWrapper;
