import { createSelector } from 'reselect';

/**
 * Direct selector to the rightSide state domain
 */
const selectRightSideDomain = () => state => state.get('currentCowork');

/**
 * Other specific selectors
 */

const selectCurrentCowork = () => createSelector(
  selectRightSideDomain(),
  (currentCoworkState) => currentCoworkState.get('cowork'),
);

const selectCurrentFilters = () => createSelector(
  selectRightSideDomain(),
  (currentCoworkState) => currentCoworkState.get('filter'),
);


/**
 * Default selector used by RightSide
 */

const selectRightSide = () => createSelector(
  selectRightSideDomain(),
  (substate) => substate.toJS()
);

export default selectRightSide;
export {
  selectRightSide,
  selectRightSideDomain,
  selectCurrentCowork,
  selectCurrentFilters,
};
