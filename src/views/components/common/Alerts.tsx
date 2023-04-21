import React, {  useEffect }  from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector}  from 'react-redux';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Close from '@mui/icons-material/Close';
import { alertActions } from '../../../redux/actions';

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


    function handleSubmit(id: number) {
        dispatch(alertActions.removeAlert(id));
    }

    if( alert.notification.length > 0 ) {
        return (

            <Stack >
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
                                            <Close fontSize="inherit" />
                                        </IconButton>
                                    }
                            >
                                {alerts.msg}
                            </Alert>
                        </Collapse>
                    </div>
                )}
            </Stack>
        );
    } else {
        return null;
    }
}

export default  Alerts;
