import { alertConstants } from '../constants';
import { v4 as uuidv4 } from 'uuid';
import { Dispatch } from 'redux';
import { Alert } from '../reducers/alert.reducer'; // Import the Alert type from your alert.reducer.tsx

// Define the action types
type AlertAction =
    | { type: typeof alertConstants.SET_ALERT; payload: Alert }
    | { type: typeof alertConstants.REMOVE_ALERT; payload: string };

export const alertActions = {
    success,
    error,
    warning,
    clear,
    info,
    setAlert,
    removeAlert,
};

function setAlert(  msg: string,alertType: string,timeout = 4000,open = true) {
    return (dispatch: Dispatch<AlertAction>) => {
       let id:string  = uuidv4();
        setTimeout(() => dispatch({ type: alertConstants.REMOVE_ALERT, payload: id }), timeout);
        dispatch({ type: alertConstants.SET_ALERT, payload: { msg, alertType,  id, open } });
    };
}

function removeAlert(id: number) {
    return {
        type: alertConstants.REMOVE_ALERT,
        payload: id,
    };
}

function success(msg: string, alertType = 'success', timeout = 4000, open = true) {
    return setAlert(msg, alertType, timeout, open);
}

function error(msg: string, alertType = 'error', timeout = 4000, open = true) {
    return setAlert(msg, alertType, timeout, open);
}

function clear() {
    return { type: alertConstants.CLEAR };
}

function warning(msg: string, alertType = 'warning', timeout = 4000, open = true) {
    return setAlert(msg, alertType, timeout, open);
}

function info(msg: string, alertType = 'info', timeout = 4000, open = true) {
    return setAlert(msg, alertType, timeout, open);
}
