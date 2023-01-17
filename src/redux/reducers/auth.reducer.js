import { authConstants } from '../constants';
let user = JSON.parse(localStorage.getItem('authState'));
const initialState = user ? {
    user } : {
    isAuthenticated: false,
    user: {},
    isLoading: false,
    error: null
};


 export function authReducer(state = initialState, action) {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case authConstants.LOGIN_SUCCESS:
            localStorage.setItem('authState', JSON.stringify({
                isAuthenticated: true,
                user: action.user,
                isLoading: false,
                error: null
            }));
            return {
                ...state,
                isAuthenticated: true,
                user: action.user,
                isLoading: false,
                error: null
            };
        case authConstants.LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.message
            };
        case authConstants.LOGOUT_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case authConstants.LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                user: {},
                isLoading: false,
                error: null
            };
        case authConstants.LOGOUT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
}