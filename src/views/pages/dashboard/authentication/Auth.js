import logo from '../../../../Media/logo.svg';
import './Auth.css';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Paper } from '@material-ui/core';
import LinearProgress from '@mui/material/LinearProgress';
import  LoginForm from '../../../components/authentication/LoginForm'
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: theme.palette.primary.main,
    },
    paper: {
        margin: 0,
        display: 'block',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0',
    },
}));

function Auth() {
    const classes = useStyles();
    const isLoading = useSelector(state => state.authReducer.isLoading);



    return (

        <div className={classes.root} style={{ display: 'flex', justifyContent: 'center',paddingLeft:'50px',paddingRight:'50px' }}>

            <img src={logo} className="App-logo" alt="logo"  />
            <Paper className={classes.paper} elevation={3} style={{ display: 'block', width:'100%', maxWidth:'800px', marginTop: '40px' }}>
                    <LoginForm />
                {isLoading && <LinearProgress color="secondary" /> }
            </Paper>




        </div>
    );
}
export default Auth;