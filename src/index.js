import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { store,history } from './redux/helpers';
import { Provider } from 'react-redux';
import { createTheme , ThemeProvider, styled} from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReportWebVitals from "./reportWebVitals";
import { orange } from '@mui/material/colors';
// import routes
import Auth from './views/pages/dashboard/authentication/Auth';
import Dashboard from './views/pages/dashboard/';
import Alerts from './views/components/Alerts';


const theme = createTheme({
    palette: {
        primary: {
            main: '#231810',
        },
        secondary: {
            main: '#FFDE17',
        },
    },
    status: {
        danger: orange[500],
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

const user = localStorage.getItem("user");
 console.log(user);
root.render(
    <Provider store={store} >
        <ThemeProvider theme={theme} >
            <Alerts />
            <Router  history={history}>
                    <Routes>

                        <Route exact path="/dashboard" element={<Dashboard/>}/>
                        <Route exact path="/auth" element={<Auth/>}/>
                    </Routes>
            </Router>
        </ThemeProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ReportWebVitals();
