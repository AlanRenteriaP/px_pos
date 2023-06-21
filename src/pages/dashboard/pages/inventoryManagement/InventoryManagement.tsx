import React, { useState } from 'react';
import { Grid, Button, Drawer, Box, Typography } from '@mui/material';
import InventoryTable from './InventoryTable';
import RawMaterialForm from './RawMaterialForm'; // import your form component
import ProuductForm from './inventoryForms/ProductForm'; // import your form component
export default function InventoryManagement() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    return (
        <div className="container" >
            <Grid container spacing={3}>
                <Grid item xs={12} display="flex" justifyContent="space-between" alignItems="center">
                    <h2>Inventory Management</h2>
                    <Button variant="contained" color="primary" onClick={handleDrawerOpen}>+ ADD</Button>
                </Grid>
                <Grid item xs={12}>
                    <InventoryTable />
                </Grid>
            </Grid>
            <Drawer anchor="bottom" open={drawerOpen} onClose={handleDrawerClose} variant="temporary" sx={{zIndex:9999999}} >
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        backgroundColor: 'primary.main',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex:999999,
                        padding:'50px'
                    }}
                >

                    <ProuductForm  />
                </Box>
            </Drawer>
        </div>
    );
}
