/*
 *
 * RightSide reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_COWORK_BY_KEY,
  GET_COWORK_BY_KEY_SUCCESS,
  GET_COWORK_BY_KEY_ERROR,
  SET_FILTER,
  CLEAR_FILTER,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  welcome: true,
  cowork: false,
  filter: {
    key: false,
    value: false,
  },
});

function rightSideReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COWORK_BY_KEY:
      return state
        .set('error', false)
        .set('loading', true)
        .set('welcome', false)
        ;
    case GET_COWORK_BY_KEY_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('welcome', false)
        .set('cowork', action.cowork)
        ;
    case GET_COWORK_BY_KEY_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error)
        .set('welcome', false)
        .set('cowork', false)
        ;
    case SET_FILTER:
      return state
        .set('filter', { key: action.key, value: action.value });
    case CLEAR_FILTER:
      return state
        .set('filter', initialState.filter);
    default:
      return state;
  }
}

export default rightSideReducer;
