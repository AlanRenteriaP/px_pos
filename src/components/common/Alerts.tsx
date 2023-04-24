import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Close from '@mui/icons-material/Close';
import { alertActions } from '../../../redux/actions';
import { RootState } from '../../../redux/store'; // Import RootState from your Redux store

const useStyles = makeStyles(() => ({
    AlertMessage: {
        display: 'block',
        position: 'fixed',
        top: '10px',
        right: '20px',
        zIndex: '1000000',
        marginBottom: '10px',
    },
}));

function Alerts() {
    const classes = useStyles();
    const alert = useSelector((state: RootState) => state.alert); // Use RootState to provide a type for state
    const dispatch = useDispatch();

    function handleSubmit(id: string) {
        dispatch(alertActions.removeAlert(id));
    }

    return (
        <div className={classes.AlertMessage}>
            {alert.notification.map((alerts) => (
                <div key={alerts.id}>
                    <Alert
                        severity={alerts.alertType as "error" | "info" | "success" | "warning"} // Cast alertType as a valid severity
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => handleSubmit(alerts.id)}
                            >
                                <Close fontSize="inherit" />
                            </IconButton>
                        }
                    >
                        {alerts.msg}
                    </Alert>
                </div>
            ))}
        </div>
    );
}

export default Alerts;
