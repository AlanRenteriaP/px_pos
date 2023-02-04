import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { menubarActions} from "../../../redux/actions";
import WarehouseIcon from '@mui/icons-material/Warehouse';
import LogoutIcon from '@mui/icons-material/Logout';
import {makeStyles} from "@material-ui/styles";
import PersonIcon from '@mui/icons-material/Person';

const drawerWidth = 240;
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        zindex: '2'
    },
    logoutPosition:{
        position:'absolute !important',
        width:drawerWidth,
        bottom: 0,
    },
    drawercolor:{
        background: theme.palette.secondary.main + ' !important',
    },
    bottoncolor:{
        background: theme.palette.primary.main + '!important',
    }
}));



function DrawerMenu() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const theme = useTheme();
    const isOpen = useSelector(state => state.menubar.isOpen);
    const handleDrawer = () => {
        dispatch(menubarActions.toggle_menu(isOpen));
    };
    const logout =() => {
       console.log('logout')
    }


    return (

        <Drawer  classes={{paper:classes.drawercolor}} variant="permanent" open={isOpen}>
            <DrawerHeader>
                <IconButton onClick={handleDrawer}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <List>

                <Divider />
                <ListItem component={Link} to="/dashboard/materiaprima" key={'MateriaPrima'}  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton classes={{focused: classes.bottoncolor}} sx={{minHeight: 48, justifyContent: isOpen ? 'initial' : 'center', px: 2.5,}}>
                        <ListItemIcon color="blue" sx={{minWidth: 0, mr: isOpen ? 3 : 'auto', justifyContent: 'center',}}><WarehouseIcon /></ListItemIcon>
                        <ListItemText color="primary" primary={'Materia Prima'} sx={{ opacity: isOpen ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
                <Divider />
            </List>

            <List className={classes.logoutPosition}>
                <Divider />
                <ListItem component={Link} to="/dashboard/profile"  key="AdminProfile" disablePadding sx={{ display: 'block'}}>
                    <ListItemButton  sx={{minHeight: 48, justifyContent: isOpen? 'initial' : 'center', px:2.5,}}>
                        <ListItemIcon sx={{minWidth: 0, mr: isOpen ? 3 : 'auto', justifyContent: 'center',}}>  <PersonIcon /></ListItemIcon>
                        <ListItemText primary="Admin Profile"  sx={{ opacity: isOpen ? 1 : 0 }}/>
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem  onClick={logout}  key="LogOut">
                    <ListItemIcon>  <LogoutIcon /></ListItemIcon>
                    <ListItemText primary="Log Out" />
                </ListItem>

            </List>
        </Drawer>

    );
}

export default  DrawerMenu;

