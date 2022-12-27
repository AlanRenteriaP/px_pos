import { authConstants } from '../constants';
import { alertActions } from './';
import { history } from '../helpers';
import { authService } from "../services";

export const authActions = {
    login,
};


function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        authService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error[0].errorMessage.toString()));
                    dispatch(alertActions.error(error[0].errorMessage.toString()));
                }
            );
    };

    function request(user) {
        return { type: authConstants.LOGIN_REQUEST, user }
    }
    function success(user) { return { type: authConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: authConstants.LOGIN_FAILURE, error } }
}
