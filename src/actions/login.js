import { auth } from '../services/authenticationService'
import { userConstants } from '../constants/userConstants'

export function login(username, password) {
    return dispatch => {
        auth.login(username, password)
            .then(
                user => { 
                    dispatch({
                        type: userConstants.LOGIN_SUCCESS,
                        user: user
                    });
                },
                error => {
                    dispatch({
                        type: userConstants.LOGIN_FAILURE,
                        message: error
                    });
                }
            );
    };
}

export function logOut() {
    auth.logout()
    return {
        type: userConstants.LOGOUT
    }
}

