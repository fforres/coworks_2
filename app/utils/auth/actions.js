/*
 *
 * Login actions
 *
 */

import {
  START_LOGIN,
  LOGIN_FACEBOOK,
  LOGIN_TWITTER,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  START_LOGOUT,
} from './constants';


export const startLogin = () => ({ type: START_LOGIN });
export const startLogout = () => ({ type: START_LOGOUT });
export const loginFacebook = () => ({ type: LOGIN_FACEBOOK });
export const loginTwitter = () => ({ type: LOGIN_TWITTER });
export const loginSuccess = (userData) => ({ type: LOGIN_SUCCESS, userData });
export const loginError = (error) => ({ type: LOGIN_ERROR, error });
