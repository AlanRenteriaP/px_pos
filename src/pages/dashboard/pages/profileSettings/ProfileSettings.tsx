import React from 'react';
import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import InventoryTable from "@pages/dashboard/pages/inventoryManagement/InventoryTable";

export default function ProfileSettings(){
    const [credentials, setCredentials] = React.useState({ name: '', email: '', password: '' });

    async function handleSubmit(e:any) {
        e.preventDefault();

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

