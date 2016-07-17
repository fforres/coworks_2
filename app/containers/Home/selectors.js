import { createSelector } from 'reselect';

/**
 * Direct selector to the home state domain
 */
const selectCoworksDomain = () => state => state.get('coworks');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Home
 */

const selectCoworks = () => createSelector(
  selectCoworksDomain(),
  (substate) => substate.get('coworksArr')
);

const selectLoading = () => createSelector(
  selectCoworksDomain(),
  (substate) => substate.get('loading')
);

const selectError = () => createSelector(
  selectCoworksDomain(),
  (substate) => substate.get('error')
);

export default selectCoworksDomain;
export {
  selectCoworksDomain,
  selectCoworks,
  selectLoading,
  selectError,
};
