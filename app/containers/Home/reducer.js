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
  GET_COWORKS,
  GET_COWORKS_SUCCESS,
  GET_COWORKS_ERROR,
} from './constants';
const initialState = fromJS({
  coworksArr: [],
  loading: false,
  error: false,
});

function coworksReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COWORKS:
      return state
        .set('loading', true)
        .set('error', false);
    case GET_COWORKS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('coworksArr', action.coworks);
    case GET_COWORKS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}
export default coworksReducer;
