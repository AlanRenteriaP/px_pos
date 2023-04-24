// alert.reducer.tsx

import { alertConstants } from '../constants';

const initialState: AlertState = {
    notification: [],
};

// Define the Alert type
export interface Alert {
    id: string;
    alertType: string;
    msg: string;
    open?: boolean;
}

// Define the AlertState type
export interface AlertState {
    notification: Alert[];
}

export function alert(state: AlertState = initialState, action: any): AlertState {
    switch (action.type) {
        case alertConstants.SET_ALERT:
            return {
                ...state,
                notification: state.notification.concat(action.payload),
            };
        case alertConstants.REMOVE_ALERT:
            return {
                ...state,
                notification: state.notification.filter(
                    (alert) => alert.id !== action.payload,
                ),
            };
        case alertConstants.DELETE_SUCCESS:
            return {
                notification: state.notification.filter(
                    (alert) => alert.id !== action.id,
                ),
            };
        default:
            return state;
    }
}
