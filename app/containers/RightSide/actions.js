/*
 *
 * RightSide actions
 *
 */

import {
  GET_COWORK_BY_KEY,
  GET_COWORK_BY_KEY_SUCCESS,
  GET_COWORK_BY_KEY_ERROR,
} from './constants';

export const getCoworkByKey = (key, value) => ({ type: GET_COWORK_BY_KEY, key, value });
export const coworkLoaded = (cowork) => ({ type: GET_COWORK_BY_KEY_SUCCESS, cowork });
export const coworkLoadingError = (error) => ({ type: GET_COWORK_BY_KEY_ERROR, error });

export const actions = {
  getCoworkByKey,
  coworkLoaded,
  coworkLoadingError,
};
