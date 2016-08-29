/*
 *
 * Home actions
 *
 */

import {
  SUGGESTION_SENDING,
  SUGGESTION_ERROR,
  SUGGESTION_SUCCESS,
} from './constants';

export const suggestionSending = () => ({ type: SUGGESTION_SENDING });
export const suggestionError = () => ({ type: SUGGESTION_ERROR });
export const suggestionSuccess = () => ({ type: SUGGESTION_SUCCESS });

export const actions = {
  suggestionSending,
  suggestionError,
  suggestionSuccess,
};
