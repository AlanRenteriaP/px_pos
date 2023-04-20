import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import { history } from '../redux/helpers';
import { ThemeProvider } from '@mui/material/styles';
import Alerts from './components/common/Alerts';
import PrivateRoute from './components/common/PrivateRoute';
import theme from './theme';

// Pages
import Landing from './pages/landing/Landing';
import Dashboard from './pages/dashboard/Dashboard';
import Auth from './pages/authentication/Auth';
import NotFound from './pages/NotFound/NotFound';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Alerts />
            <Router history={history}>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/dashboard/*" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                    <Route path="/auth/*" element={<Auth />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;