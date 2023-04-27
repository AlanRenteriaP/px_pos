import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import BarChartIcon from '@mui/icons-material/BarChart';
import {makeStyles} from "@mui/styles";
import logo from '../../../assets/media/logo-app.png';
import {useSelector} from "react-redux";
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main + ' !important',
    },
    paper: {
        margin: 0,
        display: 'block',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0',
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: drawerWidth,
    },
    appBar: {
        backgroundColor: theme.palette.primary.main + ' !important',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    }
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));


function ResponsiveAppBar() {
    const classes = useStyles();
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const drawer_status = useSelector(state => state.menubar.isOpen);
    // const user = useSelector(state => state.slice.user);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };



    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed"  className={classes.appBar} open={drawer_status} style={{paddingLeft: drawer_status ? 0 : 65 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography variant="h6" noWrap component="a" href="/" sx={{ mr: 2, display: { xs: 'none', md: 'flex' },  fontFamily: 'monospace', fontWeight: 700,  letterSpacing: '.3rem', color: 'inherit',  textDecoration: 'none',}}>
                        <img src={logo} alt="logo"  />
                    </Typography>


                    <Typography variant="h5"  noWrap component="a" href="" sx={{mr: 2,  display: { xs: 'flex', md: 'none' },  flexGrow: 1, fontFamily: 'monospace',  fontWeight: 700,  letterSpacing: '.3rem',   color: 'inherit', textDecoration: 'none'}}>
                        <img src={logo} alt="logo"  />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <BarChartIcon/>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Alan Renteria" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;