import { Box, Button, Container, TextField } from '@mui/material';
import { useDispatchTyped ,useAppSelector } from '@src/hooks';
import React, { useState } from 'react';
import { DashboardProfile } from './dashboardProfile'
import { inventoryManagement } from './inventoryManagement';
export default function ActiveComponent()  {

    const activeComponentName = useAppSelector(state => state.activeComponent.componentName);

    let ActiveComponent;
    switch(activeComponentName) {
        case 'Profile':
            ActiveComponent = DashboardProfile;
            break;
        case 'inventoryManagement':
            ActiveComponent = inventoryManagement;
            break;
        default:
            ActiveComponent = DashboardProfile;
    }

    return (
        <Box sx={{ flexGrow: 1, padding: 10 }}>
            <ActiveComponent />

        </Box>
    );
}




