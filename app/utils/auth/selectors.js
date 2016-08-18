import { createSelector } from 'reselect';

/**
 * Direct selector to the login state domain
 */
const selectLoginDomain = () => state => state.get('login');

/**
 * Other specific selectors
 */

const selectLoggedIn = () => createSelector(
  selectLoginDomain(),
  (currentLoginState) => currentLoginState.get('loggedIn'),
);

const selectUserData = () => createSelector(
  selectLoginDomain(),
  (currentLoginState) => currentLoginState.get('userData'),
);

const selectCode = () => createSelector(
  selectLoginDomain(),
  (currentLoginState) => currentLoginState.get('code'),
);


/**
 * Default selector used by Login
 */

const selectLogin = () => createSelector(
  selectLoginDomain(),
  (substate) => substate.toJS()
);

export default selectLogin;
export {
  selectLoginDomain,
  selectLoggedIn,
  selectUserData,
  selectCode,
};
