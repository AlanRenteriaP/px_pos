import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { useDispatchTyped, useAppSelector } from '@src/hooks';
import { setAlert } from '@redux/features/alert';

import { MainLanding, NotFound, LoginPage, Dashboard } from '@pages';

import { Alerts, PrivateRoute, PrivateWrapper } from '@components/features';

const App: React.FC = () => {
    const dispatch = useDispatchTyped();
    const auth = useAppSelector((state) => state.auth); // assuming you have a token reducer




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
                    <Route path="/dashboard/*" element={<PrivateWrapper><Dashboard /></PrivateWrapper>} />
                    <Route path="/loginpage" element={<LoginPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                </Router>
        </ThemeProvider>
    );
}

export default App;

