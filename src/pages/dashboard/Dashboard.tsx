import React, { useState } from 'react';
import ResponsiveAppBar from "../../components/navbar/ResponsiveAppBar";
import DrawerMenu from '../../components/dashboard/drawer/DrawerMenu';
import Maindrawer from '../../components/dashboard/drawer/Maindrawer';
import { styled } from '@mui/material/styles';
import {useSelector} from "react-redux";
import {makeStyles} from "@mui/styles";
import Box from '@mui/material/Box';
import {Route, Routes} from "react-router-dom";
import Profile from '../../components/dashboard/pages/Profile';
import Materiaprima from '../../components/dashboard/pages/Materiaprima';

const drawerWidth = 0;
const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft:65,
        marginTop:65,
    },

}));

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);
function Dashboard() {
    const [activeComponent, setActiveComponent] = useState(Profile);
    const drawer_status = useSelector(state => state.menubar.isOpen);
    const classes = useStyles();
    return (

        <Box sx={{ display: 'flex' }}>
            <ResponsiveAppBar/>
            {/*<DrawerMenu/>*/}
            <Maindrawer />
            <Main open={drawer_status} className={classes.root}>

                {activeComponent && <activeComponent />}
                {/*<Routes>*/}
                {/*    <Route  path="/materiaprima/*" element={<Materiaprima/>}/>*/}
                {/*    <Route  path="/profile/*" element={<Profile/>}/>*/}
                {/*    <Route  path="*" element={<Profile/>}  />*/}
                {/*</Routes>*/}
            </Main>

        </Box>
    );
}
export default Dashboard;