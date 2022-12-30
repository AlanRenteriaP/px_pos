import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Paper } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { history } from '../redux/helpers';

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

function Dashboard() {
    const classes = useStyles();

    return (

        <div >
              <Paper  >
                    this is the dashboard
              </Paper>

        </div>
    );
}
export default Dashboard;