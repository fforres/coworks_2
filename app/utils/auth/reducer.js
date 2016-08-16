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
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  START_LOGOUT,
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
    case LOAD: // INITIAL LOAD. RESTORING SESSION
      return state
        .merge(action.payload.login);
    case START_LOGOUT: // INITIAL LOAD. RESTORING SESSION
      return initialState;
    case LOGIN_SUCCESS:
      {
        const newState = state
          .set('loggingOut', false)
          .set('loggedIn', true)
          .set('loggingIn', false)
          .set('userData', { 2: 2 });
        return newState;
      }
    case LOGIN_ERROR:
      return state
        .set('loggingOut', false)
        .set('loggedIn', false)
        .set('loggingIn', false)
        .set('userData', userData);
    default:
      return state;
  }
}

export default loginReducer;
