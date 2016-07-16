/*
 *
 * Home actions
 *
 */

import {
  GET_COWORKS,
  GET_COWORKS_SUCCESS,
  GET_COWORKS_ERROR,
} from './constants';

export const getCoworks = () => ({ type: GET_COWORKS });
export const coworksLoaded = (coworks, coworksArr) => ({ type: GET_COWORKS_SUCCESS, coworks, coworksArr });
export const coworksLoadingError = (error) => ({ type: GET_COWORKS_ERROR, error });

export const actions = {
  getCoworks,
  coworksLoaded,
  coworksLoadingError,
};
