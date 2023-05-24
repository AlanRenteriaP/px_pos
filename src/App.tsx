import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
// import PrivateRoute from './views/components/feature/PrivateRoute';
import theme from './theme';
import { useDispatchTyped ,useAppSelector } from '@src/hooks';
import { setAlert } from '@redux/features/alert';
// Pages

import {MainLanding, NotFound,LoginPage,Dashboard} from '@pages';

// components
import {Alerts} from '@components/features/alerts';

const App: React.FC = () => {
    const dispatch = useDispatchTyped();
    // dispatch(setAlert( "success","This is an alert message!"));

    dispatch(setAlert({  msg: "This is a success message!", alertType: "success" }));
    dispatch(setAlert({  msg: "This is a warning message!", alertType: "warning" }));
    dispatch(setAlert({  msg: "This is a info message!", alertType: "info" }));
    dispatch(setAlert({  msg: "This is a error message!", alertType: "error" }));
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
