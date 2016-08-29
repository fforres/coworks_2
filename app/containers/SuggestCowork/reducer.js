/*
 *
 * Home reducer
 *
 */


/*
 function homeReducer(state = initialState, action) {
   switch (action.type) {
     case DEFAULT_ACTION:
       return state;
     default:
       return state;
   }
 }
*/

import { fromJS } from 'immutable';
import {
  SUGGESTION_SENDING,
  SUGGESTION_ERROR,
  SUGGESTION_SUCCESS,
} from './constants';
const initialState = fromJS({
  loading: false,
  success: false,
  error: false,
});

function coworksReducer(state = initialState, action) {
  switch (action.type) {
    case SUGGESTION_SENDING:
      return state
        .set('loading', true)
        .set('success', false)
        .set('error', false);
    case SUGGESTION_SUCCESS:
      return state
        .set('loading', false)
        .set('success', true)
        .set('error', false);
    case SUGGESTION_ERROR:
      return state
        .set('loading', false)
        .set('success', false)
        .set('error', true);
    default:
      return state;
  }
}
export default coworksReducer;
