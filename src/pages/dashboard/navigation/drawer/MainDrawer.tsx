import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Drawer from "@mui/material/Drawer";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";
import {useAppSelector} from "@src/hooks";
const drawerWidth = 255;

const miniDrawerWidth = 60;






export default function MiniDrawer() {

    const theme = useTheme();
     const isOpen = useAppSelector(state => state.appBar);

    return (

        <Drawer anchor="left" variant="permanent"  sx={{width: drawerWidth, flexShrink: 0, whiteSpace: 'nowrap', boxSizing: 'border-box',
            ...(isOpen && {
                width: drawerWidth,
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            }),
            ...(!isOpen && {
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                overflowX: 'hidden',
                width: `${miniDrawerWidth}px`,
            }),
        }}>
            <Sidebar/>
        </Drawer>

    );
}


// <Drawer anchor="left" variant="persistent" sx={{ width: '100%', maxWidth: '240px', flexShrink: 0, '& .MuiDrawer-paper': {width: '100%', maxWidth: '240px', top: 'auto' }}} open={isOpen}>
//     <Sidebar/>
// </Drawer>