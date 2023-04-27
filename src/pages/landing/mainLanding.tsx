import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MainLanding: React.FC = () => {
    const navigate = useNavigate();

    const handleButtonClick = (path: string) => {
        navigate(path);
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome to My App
                </Typography>
                <Box sx={{ mt: 2 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleButtonClick('/signing')}
                    >
                        Sign In
                    </Button>
                </Box>
                <Box sx={{ mt: 2 }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleButtonClick('/signup')}
                    >
                        Sign Up
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default MainLanding;