import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { MainAppBar } from './navigation/appBar';
import { MainDrawer } from './navigation/drawer';
// @ts-ignore
import { useSpring, animated } from 'react-spring';
import { useDispatchTyped ,useAppSelector } from '@src/hooks';
import  { ActiveComponent }  from './pages';
const drawerWidth = 255;

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
                         <ActiveComponent />
                </Box>
        </Box>
    );
}

export default Dashboard;


