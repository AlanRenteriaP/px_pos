import { authConstants } from '../constants';
import { alertActions } from './';
import { authService } from "../services";


export const authActions = {
    login,
};


function login(username, password) {
    return dispatch => {

        dispatch(request({ username }));
        authService.login(username, password)
            .then(response => {
                       dispatch(success(response.user))
                       dispatch(alertActions.success(response.message ));
                     },
                    error => {
                       console.log(error);
                        dispatch(failure(error));
                        dispatch(alertActions.warning(error[0].message));
                       });

    };

    function request(user) {  return { type: authConstants.LOGIN_REQUEST, user }}
    function success(user) {return { type: authConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: authConstants.LOGIN_FAILURE, error } }
}
