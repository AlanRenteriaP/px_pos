import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Profile from '@components/dashboard/pages/Profile';

import {ResponsiveAppBar} from '@components/navbar';

function Dashboard() {
    const [activeComponent, setActiveComponent] = useState(Profile);
    // const drawer_status = useSelector(state => state.menubar.isOpen);

    const ActiveComponent = activeComponent; // rename it for JSX

    return (
        <Box sx={{ display: 'flex' }}>
            <ResponsiveAppBar/>
            {/*<Maindrawer open={drawer_status} />*/}
            {/*<Box component="div">*/}
            {/*    <ActiveComponent />*/}
            {/*</Box>*/}
        </Box>
    );
}

export default Dashboard;