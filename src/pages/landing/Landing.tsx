import React from 'react';
import { Paper } from '@mui/material';
import {alertActions} from "../../../redux/actions";
import {useDispatch} from "react-redux";
import { Navigate } from "react-router-dom";

function Landing() {

    const authState = JSON.parse(localStorage.getItem("authState") ?? '{}');
    const dispatch = useDispatch();

    if (authState?.isAuthenticated) {
        dispatch(alertActions.info('Logged In!'));
        return <Navigate to="/dashboard" />;
    }

    return (
        <Paper>
            this is the landing page
        </Paper>
    );
}
export default Landing;