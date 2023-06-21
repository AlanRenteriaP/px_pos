import React from 'react';
import { Box, Button, Container, TextField } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Logo from '@assets/media/logo.svg';
import { useDispatchTyped } from "@src/hooks";
import { setAlert } from "@redux/features";
import { login } from "@src/services";
import { loginSuccess } from "@redux/auth";


function LoginPage() {
    const theme = useTheme();
    const dispatch = useDispatchTyped();
    const [credentials, setCredentials] = React.useState({ email: '', password: '' });
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    async function handleSubmit(e:any) {
        e.preventDefault();

        if (credentials.email && credentials.password) {
            dispatch(setAlert({ msg: "Attempting Login", alertType: "info" }));
            try {
                const token = await login(credentials);
                dispatch(setAlert({ msg: "Login Successful", alertType: "success" }));
                dispatch(loginSuccess(token));
                setIsLoggedIn(true);
            } catch (error:any) {
                dispatch(setAlert({ msg: error.message, alertType: "warning" }));
            }
        } else {
            dispatch(setAlert({ msg: "Email and Password must not be empty", alertType: "info" }));
        }
    }

    if (isLoggedIn) {
        return <Navigate to="/dashboard" />;
    }

    // Rest of your component JSX...

    return (
        // Rest of your component JSX...
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', mt: 3 ,backgroundColor:'white',padding: 20 }}>
            <TextField
                id="outlined-username-input"
                label="Username"
                type="text"
                autoComplete="current-username"
                style={{  width:'100%', marginTop:'10px'}}
                value={credentials.email}
                onChange={(event) => setCredentials({ ...credentials, email: event.target.value })}
                color="secondary"
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                style={{  width:'100%', marginTop:'10px'}}
                value={credentials.password}
                onChange={(event) => setCredentials({ ...credentials, password: event.target.value })}
                color="secondary"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Login
            </Button>
        </Box>
    );
}

export default LoginPage;
