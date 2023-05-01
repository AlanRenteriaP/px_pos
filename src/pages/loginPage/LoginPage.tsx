import React from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Logo from '@assets/media/logo'; // Replace with the correct path to your logo file

type FormData = {
    email: string;
    password: string;
};

function LoginPage() {
    const { register, handleSubmit } = useForm<FormData>();
    const navigate = useNavigate();

    const onSubmit = (data: FormData) => {
        console.log(data);
        navigate('/dashboard');
    };

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    paddingTop: 3,
                    paddingBottom: 3,
                }}
            >
                <img src={Logo} alt="Logo" style={{ marginBottom: '24px' }} /> {/* Add your logo here */}
                <Typography variant="h4" component="h1" gutterBottom>
                    Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: '100%', mt: 3 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        {...register('email')}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        {...register('password')}
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Login
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default LoginPage;
