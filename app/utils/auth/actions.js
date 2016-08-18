/*
 *
 * Login actions
 *
 */

import {
  START_LOGIN,
  SAVE_USER_SESSION,
  LOGIN_ERROR,
  START_LOGOUT,
  LOGIN_AUTH0,
} from './constants';


export const startLogin = () => ({ type: START_LOGIN });
export const startLogout = () => ({ type: START_LOGOUT });
export const saveUserSession = (userData) => ({ type: SAVE_USER_SESSION, userData });
export const loginAuth0 = () => ({ type: LOGIN_AUTH0 });
export const loginError = (error) => ({ type: LOGIN_ERROR, error });
