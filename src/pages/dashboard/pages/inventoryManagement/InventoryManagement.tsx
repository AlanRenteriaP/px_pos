import React, { useState } from 'react';
import { Grid, Button, Drawer, Box, Typography } from '@mui/material';
import InventoryTable from './InventoryTable';
import ProductVariantForm from './inventoryForms/ProductVariantForm';
import ProductForm from './inventoryForms/ProductForm';

export default function InventoryManagement() {
    const [productDrawerOpen, setProductDrawerOpen] = useState(false);
    const [productVariantDrawerOpen, setProductVariantDrawerOpen] = useState(false);
    const [refreshData, setRefreshData] = useState(false);

    const handleProductDrawerOpen = () => {
        setProductDrawerOpen(true);
    };

    const handleProductDrawerClose = () => {
        setProductDrawerOpen(false);
    };

    const handleProductAdd = () => {
        setRefreshData(prev => !prev);
        handleProductDrawerClose();
    };

    return (
        <div className="container">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h2">Inventory Management</Typography>
                        <Button variant="contained" color="primary" onClick={handleProductDrawerOpen}>+ ADD PRODUCT</Button>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <InventoryTable refresh={refreshData} />
                </Grid>
            </Grid>
            <Drawer anchor="bottom" open={productDrawerOpen} onClose={handleProductDrawerClose} sx={{zIndex:9999999}} variant="temporary">
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        backgroundColor: 'primary.main',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding:'50px'
                    }}
                >
                    <ProductForm onProductAdd={handleProductAdd} />
                </Box>
            </Drawer>
        </div>
    );
}
