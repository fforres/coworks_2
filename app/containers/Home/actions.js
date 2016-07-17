/*
 *
 * Home actions
 *
 */

import {
  ADD_COWORK,
  SET_COWORKS,
  SEARCH_COWORKS,

  GET_COWORKS,
  GET_COWORKS_SUCCESS,
  GET_COWORKS_ERROR,

} from './constants';

export const addCowork = (cowork) => ({ type: ADD_COWORK, payload: cowork });
export const setCoworks = (coworks) => ({ type: SET_COWORKS, payload: coworks });
export const searchCoworks = (coworks) => ({ type: SEARCH_COWORKS, payload: coworks });

export const getCoworks = () => ({ type: GET_COWORKS });
export const coworksLoaded = (coworks, coworksArr) => ({ type: GET_COWORKS_SUCCESS, coworks, coworksArr });
export const coworksLoadingError = (error) => ({ type: GET_COWORKS_ERROR, error });

export const actions = {
  getCoworks,
  coworksLoaded,
  coworksLoadingError,
};
