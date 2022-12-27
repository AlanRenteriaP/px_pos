import { alertConstants } from '../constants';
import { v4 as uuidv4 } from 'uuid';

export const alertActions = {
    success,
    error,
    warning,
    clear,
    info,
    setAlert,
    removeAlert
};

function setAlert(msg, alertType, timeout = 4000 , open = true){
    return dispatch => {
        const id = uuidv4();
        setTimeout(() => dispatch({type: alertConstants.REMOVE_ALERT, payload:id}),timeout);
        dispatch({type: alertConstants.SET_ALERT, payload: {msg ,alertType, id, open}});

    }
}


function removeAlert(id) {
    return {
        type: alertConstants.REMOVE_ALERT, payload: id
    }
};


function success(msg , alertType = "success", timeout = 4000, open = true) {
    return dispatch => {
        const id = uuidv4();
        setTimeout(() => dispatch({type: alertConstants.REMOVE_ALERT, payload:id}),timeout);
        dispatch({type: alertConstants.SET_ALERT, payload: {msg ,alertType , id, open }});

    }
}

function error(msg , alertType = "error", timeout = 4000, open = true) {
    return dispatch => {
        const id = uuidv4();
        setTimeout(() => dispatch({type: alertConstants.REMOVE_ALERT, payload:id}),timeout);
        dispatch({type: alertConstants.SET_ALERT, payload: {msg ,alertType, id, open }});

    }
}

function clear() {
    return { type: alertConstants.CLEAR };
}

function warning(msg , alertType = "warning", timeout = 4000, open = true){
    return dispatch => {
        const id = uuidv4();
        setTimeout(() => dispatch({type: alertConstants.REMOVE_ALERT, payload:id}),timeout);
        dispatch({type: alertConstants.SET_ALERT, payload: {msg ,alertType , id, open }});

    }
}
function info(msg , alertType = "info", timeout = 4000, open = true){
    return dispatch => {
        const id = uuidv4();
        setTimeout(() => dispatch({type: alertConstants.REMOVE_ALERT, payload:id}),timeout);
        dispatch({type: alertConstants.SET_ALERT, payload: {msg ,alertType , id, open }});

    }
}