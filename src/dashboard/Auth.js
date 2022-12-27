import logo from '../Media/logo.svg';
import './Auth.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';


import  LoginForm from '../components/LoginForm'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: theme.palette.primary.main,
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'block',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
}));

function Auth() {
    const classes = useStyles();





    return (

        <div className={classes.root} style={{ display: 'flex', justifyContent: 'center',paddingLeft:'50px',paddingRight:'50px' }}>

            <img src={logo} className="App-logo" alt="logo" />
            <Paper className={classes.paper} elevation={3} style={{ display: 'block', width:'100%', maxWidth:'800px' }}>
                    <LoginForm />
            </Paper>
        </div>
    );
}
export default Auth;