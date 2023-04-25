import { authConstants } from '../constants';
import { alertActions } from '../../actions';
import { authService } from "../../services";


export const actions = {
    login,
};


function login(username, password) {
    return dispatch => {

        dispatch(request({ username }));
        authService.login(username, password)
            .then(response => {
                       dispatch(success(response))
                       dispatch(alertActions.success(response.message ));
                     },
                    error => {
                       console.log(error);
                        dispatch(failure(error));
                        dispatch(alertActions.warning(error[0].message));
                       });

    };

    function request(user) {  return { type: authConstants.LOGIN_REQUEST, user }}
    function success(credentials) {return { type: authConstants.LOGIN_SUCCESS, credentials } }
    function failure(error) { return { type: authConstants.LOGIN_FAILURE, error } }
}
