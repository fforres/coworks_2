import { take, put, fork } from 'redux-saga/effects';
import { LOGIN_AUTH0 } from './constants';
import { startLogin } from './actions';
import lock from 'utils/auth/auth0';
export function* startLoginWithAuth0Watcher() {
  while (yield take(LOGIN_AUTH0)) {
    yield put(startLogin());
    lock.show();
  }
}

export function* rootSaga() {
  // Fork watchers so we can continue execution
  yield fork(startLoginWithAuth0Watcher);
  // Suspend execution when location changes
  // yield take(LOCATION_CHANGE);
  // yield cancel(watcher1);
  // yield cancel(watcher2);
}

// All sagas to be loaded
export default [
  rootSaga,
];
