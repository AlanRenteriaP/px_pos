import React, {  useEffect }  from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector}  from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import { alertActions } from '../redux/actions';

const useStyles = makeStyles((theme) => ({

    MarginB: {
        marginBottom: "5px"
    },
    AlertMessage:{
        display: 'block',
        position: 'fixed',
        top:'10px',
        right:'20px',
        zIndex:'1000000',
        marginBottom: '10px'
    },
}));

function Alerts(){

    const classes = useStyles();
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
    }, []);


    function handleSubmit(id) {
        dispatch(alertActions.removeAlert(id));

    }

    if( alert.notification.length > 0 ) {
        return (

            <div  className={classes.AlertMessage}>
                {alert.notification.map(alerts =>
                    <div    className={clsx({[classes.MarginB]: alerts.open })}  key={alerts.id} >
                        <Collapse    key={alerts.id}  in={alerts.open}>
                            <Alert  severity={`${alerts.alertType}`}
                                    action={
                                        <IconButton
                                            aria-label="close"
                                            color="inherit"
                                            size="small"
                                            onClick={() => handleSubmit(alerts.id)}
                                        >
                                            <CloseIcon fontSize="inherit" />
                                        </IconButton>
                                    }
                            >
                                {alerts.msg}
                            </Alert>
                        </Collapse>
                    </div>
                )}
            </div>
        );
    } else {
        return null;
    }
}

export default  Alerts;
