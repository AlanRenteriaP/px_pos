import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { MainAppBar } from './navigation/appBar';
import { MainDrawer } from './navigation/drawer';
// @ts-ignore
import { useSpring, animated } from 'react-spring';
import { useDispatchTyped ,useAppSelector } from '@src/hooks';
const drawerWidth = 255;

import { DashboardProfile,InventoryManagement  } from './pages'

import { InventoryBar } from './pages/inventoryPages';
function Dashboard() {
    const isOpen = useAppSelector(state => state.appBar);

    const props = useSpring({
        to: { width: isOpen ? drawerWidth : 24 },
        from: { width: isOpen ? 24 : drawerWidth },
    });

    return (

        <Box sx={{ display: 'flex', height: '100vh' }}>
            <MainAppBar/>
                <Box sx={{ flexShrink: 0, position: 'relative', pt: '65px' }}>
                    <MainDrawer />
                </Box>
                <Box component="div" sx={{ flexGrow: 1, overflow: 'auto', pt: '65px',zIndex:10000, backgroundColor: 'white'}}>
                    <Routes>
                        <Route path="/" element={<DashboardProfile />} />
                        <Route path="/InventoryManagement" element={<InventoryManagement />} />
                        <Route path="/InventoryManagement/InventoryBar" element={<InventoryBar />} />
                        {/*<Route path="*" element={<NotFound />} />*/}
                    </Routes>
                </Box>
        </Box>
    );
}

export default Dashboard;


