import { userConstants } from '../constants/userConstants'

let user = JSON.parse(localStorage.getItem('user'));

const initialState = user ? { loggedIn: true, user } : { loggedIn: false, user: null, error: ''};

export function authentication(state = initialState, action) {
    switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
        return {
        loggedIn: true,
        user: action.user,
        error: ''
        };
    case userConstants.LOGIN_FAILURE:
        return {
        loggedIn: false,
        error: action.message
        };
    case userConstants.LOGOUT:
        return {
        loggedIn: false,
        error: ''
        };
    default:
        return state
    }
  }