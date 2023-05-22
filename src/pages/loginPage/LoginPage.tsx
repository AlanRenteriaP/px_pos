import React from 'react';
import { Box, Button, Container, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Logo from '@assets/media/logo.svg'; // Replace with the correct path to your logo file
// Create a theme instance.

type FormData = {
    email: string;
    password: string;
};

function LoginPage() {
    const { register, handleSubmit } = useForm<FormData>();
    const navigate = useNavigate();
    const theme = useTheme();
    const onSubmit = (data: FormData) => {
        console.log(data);
        navigate('/dashboard');
    };

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
        <Container
            maxWidth="xs"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: 3,
                paddingBottom: 3,
            }}
        >
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
                        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: '100%', mt: 3 ,backgroundColor:'white',padding: 20 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                autoComplete="email"
                                autoFocus
                                {...register('email')}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
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
            </Box>
        </Container>
</Box>
    );
}

export default LoginPage;
