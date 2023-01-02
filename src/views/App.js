import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {history} from "../redux/helpers";
import { createTheme , ThemeProvider} from '@material-ui/core/styles';
import Alerts from "./components/Alerts";
import PrivateRoute from './components/PrivateRoute';

// Pages
import Landing from "./pages/landing/Landing";
import Dashboard from "./pages/dashboard/Dashboard";
import Auth from "./pages/authentication/Auth";
import NotFound from "./pages/NotFound/NotFound";

function App(){
    const theme = createTheme({
        palette: {
            primary: {
                main: '#231810'
            },
            secondary: {
                main: "#FFDE17"
            }
        }
    });
 return(
        <ThemeProvider theme={theme} >
            <Alerts />
            <Router  history={history}>
                <Routes>
                    <Route exat path="/" element={<Landing/>}/>
                    <Route path="/dashboard/*" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
                    <Route  path="/auth/*" element={<Auth/>}/>
                    <Route  path="*" element={<NotFound/>}  />
                 </Routes>
            </Router>
        </ThemeProvider>
        );
}

export default App;