import React from 'react';
import {Box, Button, TextField} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {useDispatchTyped} from "@src/hooks";
import {register} from "@src/services";
import {registerSuccess} from "@redux/auth";
import {setAlert} from "@redux/features";
import {Navigate} from "react-router-dom";

function RegisterPage () {
    const theme = useTheme();
    const dispatch = useDispatchTyped();
    const [credentials, setCredentials] = React.useState({ name: '', email: '', password: '' });
    const [isRegistered, setIsRegistered] = React.useState(false);

    async function handleSubmit(e:any) {
        e.preventDefault();

        if (credentials.name && credentials.email && credentials.password) {
            dispatch(setAlert({ msg: "Attempting Register", alertType: "info" }));
            try {
                const token = await register(credentials);
                dispatch(setAlert({ msg: "Register Successful", alertType: "success" }));
                dispatch(registerSuccess(token));
                setIsRegistered(true);
            } catch (error:any) {
                dispatch(setAlert({ msg: error.message, alertType: "warning" }));
            }
        } else {
            dispatch(setAlert({ msg: "No field should be empty", alertType: "info" }));
        }
    }

    if (isRegistered) {
        return <Navigate to="/loginpage" />;
    }

    return(
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', mt: 3 ,backgroundColor:'white',padding: 20 }}>
            <TextField
                id="outlined-username-input"
                label="Username"
                type="text"
                autoComplete="current-username"
                style={{  width:'100%', marginTop:'10px'}}
                value={credentials.name}
                onChange={(event) => setCredentials({ ...credentials, name: event.target.value })}
                color="secondary"
            />
            <TextField
                id="outlined-email-input"
                label="Email"
                type="text"
                autoComplete="current-email"
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
                Register
            </Button>
        </Box>
    );
}

export default RegisterPage;