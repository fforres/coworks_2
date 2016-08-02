/*
 *
 * RightSide actions
 *
 */

import {
  GET_COWORK_BY_KEY,
  GET_COWORK_BY_KEY_SUCCESS,
  GET_COWORK_BY_KEY_ERROR,
  SET_FILTER,
  CLEAR_FILTER,
} from './constants';

export const getCoworkByKey = () => ({ type: GET_COWORK_BY_KEY });
export const coworkLoaded = (cowork) => ({ type: GET_COWORK_BY_KEY_SUCCESS, cowork });
export const coworkLoadingError = (error) => ({ type: GET_COWORK_BY_KEY_ERROR, error });
export const setFilter = (key, value) => ({ type: SET_FILTER, key, value });
export const clearFilter = () => ({ type: CLEAR_FILTER });

export const actions = {
  getCoworkByKey,
  coworkLoaded,
  coworkLoadingError,
  setFilter,
  clearFilter,
};
