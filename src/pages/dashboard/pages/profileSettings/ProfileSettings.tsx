import React from 'react';
import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import InventoryTable from "@pages/dashboard/pages/inventoryManagement/InventoryTable";

export default function ProfileSettings(){
    const [credentials, setCredentials] = React.useState({ password: '' });

    async function handleChangePassword(newPassword: string) {
        try {
            // Get userId from token or from your state (assuming it's available)
            const userId = getUserIdFromToken(); // Implement this function to extract userId from token
            const response = await fetch('/api/auth/change-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`, // Include your authentication token
                },
                body: JSON.stringify({ userId, newPassword }),
            });

            if (response.ok) {
                // Password changed successfully
                console.log('Password changed successfully.');
            } else {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Password change failed.');
            }
        } catch (error) {
            console.error('Error changing password:', error.message);
        }
    }

    async function handleSubmit(e: any) {
        e.preventDefault();
        const newPassword = credentials.password;
        await handleChangePassword(newPassword);
        // Optionally, you can reset the password field after successful change
        setCredentials({ ...credentials, password: '' });
    }

    return (
        <div className="container">
            <div className="row">
                <h2> Profile Settings </h2>
                <div className="col-md-12">
                    {/* Change Password Section */}
                    <h4> Change Password </h4>
                    <Grid container spacing={3}>
                        <Grid item xs={5}>
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <TextField
                                    id="outlined-changePassword-input"
                                    label="New Password"
                                    type="text"
                                    style={{width: '100%', marginTop: '10px'}}
                                    color="secondary"
                                />
                                <Button variant="contained" color="primary"> Update </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

