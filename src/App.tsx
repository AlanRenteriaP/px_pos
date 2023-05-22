import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
// import PrivateRoute from './views/components/feature/PrivateRoute';
import theme from './theme';
import { useDispatchTyped ,useAppSelector } from '@src/hooks';
// Pages

import {MainLanding, NotFound,LoginPage,Dashboard} from '@pages';

// components
import {Alerts} from '@components/features/alerts';

const App: React.FC = () => {
    const dispatch = useDispatchTyped();


    return (
        <ThemeProvider theme={theme}>
            <Alerts />
            <Router>
                <Routes>
                    <Route path="/" element={<MainLanding />} />
                    <Route path="/dashboard/*" element={<Dashboard />} />
                    <Route path="/loginpage" element={<LoginPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
