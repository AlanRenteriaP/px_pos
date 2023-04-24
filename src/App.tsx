import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Alerts from './views/components/common/Alerts';
import PrivateRoute from './views/components/common/PrivateRoute';
import theme from './theme';

// Pages
import Landing from './views/pages/landing/Landing';
import Dashboard from './views/pages/dashboard/Dashboard';
import Auth from './views/pages/authentication/Auth';
import NotFound from './views/pages/NotFound/NotFound';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Alerts />
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    {/*<Route path="/dashboard/*" element={<PrivateRoute><Dashboard /></PrivateRoute>} />*/}
                    {/*<Route path="/auth/*" element={<Auth />} />*/}
                    {/*<Route path="*" element={<NotFound />} />*/}
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
