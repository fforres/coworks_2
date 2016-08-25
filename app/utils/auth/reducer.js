/*
 *
 * Login reducer
 *
 */
import {
  fromJS,
} from 'immutable';
import {
  START_LOGIN,
  LOGIN_ERROR,
  START_LOGOUT,
  SAVE_USER_SESSION,
} from './constants';
import { LOAD } from 'redux-storage';
const userData = fromJS({});

const initialState = fromJS({
  loggedIn: false,
  loggingIn: false,
  loggingOut: true,
  userData,
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOGIN:
      return state
        .set('loggingOut', false)
        .set('loggingIn', true);
    case LOAD: { // INITIAL LOAD. RESTORING SESSION
      if (action.payload && action.payload.login) {
        return state
        .merge(action.payload.login);
      }
      return state;
    }
    case START_LOGOUT:
      return initialState;
    case SAVE_USER_SESSION:
      return state
        .set('loggedIn', true)
        .set('loggingOut', false)
        .set('loggingIn', false)
        .set('userData', action.userData);
    case LOGIN_ERROR:
      return state
        .set('loggingOut', false)
        .set('loggedIn', false)
        .set('loggingIn', false)
        .set('userData', action.userData);
    default:
      return state;
  }
}

export default loginReducer;
