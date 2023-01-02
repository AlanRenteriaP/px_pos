import logo from '../../../assets/media/logo.svg';
import './Auth.css';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Paper } from '@material-ui/core';
import LinearProgress from '@mui/material/LinearProgress';
import  LoginForm from '../../components/authentication/LoginForm'
import {useDispatch, useSelector} from "react-redux";
import { Navigate } from "react-router-dom";
import {alertActions} from "../../../redux/actions";

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
    const authState = JSON.parse(localStorage.getItem("authState"));
    const dispatch = useDispatch();
    if(authState?.isAuthenticated){
        dispatch(alertActions.info('Logged In!'));
        return <Navigate to="/dashboard" />;
    }

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