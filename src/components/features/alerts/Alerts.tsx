import React, {useEffect} from 'react';
import { Alert as MUIAlert, AlertColor } from '@mui/material';
import { RootState } from '@src/redux/store';
import {removeAlert, setAlert} from '@src/redux/features/alert';
import { useDispatchTyped ,useAppSelector } from '@src/hooks';
const Alerts: React.FC = () => {
    const alerts = useAppSelector((state: RootState) => state.alert.notification);
    const dispatch = useDispatchTyped();

    const handleClose = (id: string) => {
        dispatch(removeAlert(id));
    };

    useEffect(() => {
        alerts.forEach((alert) => {
            const timer = setTimeout(() => {
                handleClose(alert.id);
            }, 40000);

            // Cleanup when component is unmounted or an alert is removed
            return () => {
                clearTimeout(timer);
            };
        });
    }, [alerts, dispatch]);
    return (
        <div style={{ position: 'fixed', top: 65,right: 20,  padding: 10, zIndex: 100000000,}}>
            {alerts.map((alert) => {
                const { id, msg, alertType } = alert;
                const severity = alertType as AlertColor;

                return (
                    <MUIAlert key={id}  onClick={() => dispatch(removeAlert(alert.id))} severity={severity} sx={{marginBottom:10}}>
                        {msg}
                    </MUIAlert>
                );
            })}
        </div>
    );
};

export default Alerts;


// dispatch(setAlert({ id: 'error-id', msg: 'Error message', alertType: 'error' }));
// dispatch(setAlert({ id: 'warning-id', msg: 'Warning message', alertType: 'warning' }));
// dispatch(setAlert({ id: 'info-id', msg: 'Info message', alertType: 'info'}));
// dispatch(setAlert({ id: 'success-id', msg: 'Success message', alertType: 'success' }));