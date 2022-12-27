import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { store } from './redux/helpers';
import { Provider } from 'react-redux';
import { createTheme , ThemeProvider} from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ReportWebVitals from "./reportWebVitals";

// import routes
import Auth from './dashboard/Auth';
import Alerts from './components/Alerts'

const theme = createTheme({
    palette: {
        primary: {
            main: '#231810',
        },
        secondary: {
            main: '#FFDE17',
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <Provider store={store} >
        <ThemeProvider theme={theme} >
            <Alerts />
            <Router >
                    <Routes>
                        <Route path="/auth" element={<Auth/>}/>
                    </Routes>
            </Router>
        </ThemeProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ReportWebVitals();
