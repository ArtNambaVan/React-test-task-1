import { userConstants } from '../constants/userConstants'

let user = JSON.parse(localStorage.getItem('user'));

const initialState = user ? { loggedIn: true, user } : { loggedIn: false, user: null, errorMsg: ''};

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
          error: action.message
        };
      case userConstants.LOGOUT:
        return {
          error: action.message
        };
      default:
        return state
    }
  }