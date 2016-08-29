import { createSelector } from 'reselect';

/**
 * Direct selector to the home state domain
 */
const selectSuggestCoworkDomain = () => state => state.get('suggestCowork');

/**
 * Other specific selectors
 */

const selectLoading = () => createSelector(
  selectSuggestCoworkDomain(),
  (substate) => substate.get('loading')
);

const selectError = () => createSelector(
  selectSuggestCoworkDomain(),
  (substate) => substate.get('error')
);

/**
 * Default selector used by Home
 */
const selectSuggestCowork = () => createSelector(
 selectSuggestCoworkDomain(),
 (substate) => substate.toJS()
);

export default selectSuggestCoworkDomain;
export {
  selectSuggestCowork,
  selectLoading,
  selectError,
};
