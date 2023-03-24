import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { menubarActions} from "../../../redux/actions";
import {makeStyles} from "@material-ui/styles";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CustomizedList from "../drawer/CustomizedList"

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



function Maindrawer() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const theme = useTheme();
    const isOpen = useSelector(state => state.menubar.isOpen);
    const handleDrawer = () => {
        dispatch(menubarActions.toggle_menu(isOpen));
    };
    // const logout =() => {
    //     console.log('logout')
    // }


    return (

        <Drawer  classes={{paper:classes.drawercolor}} variant="permanent" open={isOpen}>
            <DrawerHeader>
                <IconButton onClick={handleDrawer}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <CustomizedList />

        </Drawer>

    );
}

export default  Maindrawer;

