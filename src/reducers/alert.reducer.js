import { alertConstants } from '../constants';

const initialUserState = {
    notification:[]
}
export function alert(state = initialUserState, action) {
    switch (action.type) {

        case alertConstants.SET_ALERT:
            return {...state,
                notification: state.notification.concat(action.payload)
            };
        case alertConstants.REMOVE_ALERT:
            return {
                ...state,
                notification:  state.notification.filter(alert => alert.id !== action.payload )
            };
        case alertConstants.DELETE_SUCCESS:
            return {
                notification: state.notification.filter(alert => alert.id !== action.id )
            };
        default:
            return state
    }
}