import { take, call, put, fork, select, cancel } from 'redux-saga/effects';
import { GET_COWORK_BY_KEY } from './constants';
import { LOCATION_CHANGE } from 'react-router-redux';
import { coworkLoaded, coworkLoadingError } from './actions';
import { selectCurrentFilters } from './selectors';
import { firebaseDb } from 'utils/firebase';

const queryState = {};

export function* getCoworkByKey() {
  const filters = yield select(selectCurrentFilters());
  const { key, value } = filters;
  if (!value) {
    yield put(coworkLoadingError(true));
  } else {
    const coworkByKey = yield call(() => firebaseDb
        .ref('/coworks')
        .orderByChild(key)
        .equalTo(value)
        .once('value')
        .then((snapshot) => {
          if (Object.keys(snapshot.val()) < 1) {
            return { error: `No Data for key: ${key} and value: ${value}` };
          }
          return snapshot.val()[Object.keys(snapshot.val())[0]];
        })
        .catch((data) => ({ error: data }))
    );
    if (coworkByKey.error) {
      yield put(coworkLoadingError(coworkByKey.error));
    } else {
      yield put(coworkLoaded(coworkByKey));
    }
  }
}

export function* findCoworkByNameWatcher() {
  while (true) {
    // TODO: Ask if current state 'Loading' is true,;
    const type = yield take(GET_COWORK_BY_KEY);
    const prevTask = queryState[type];
    if (!prevTask || !prevTask.isRunning()) {
      queryState[type] = yield fork(getCoworkByKey);
    }
  }
}


export function* rootSaga() {
  // Fork watcher so we can continue execution
  yield fork(findCoworkByNameWatcher);

  // Suspend execution when location changes
  // yield take(LOCATION_CHANGE);
  // yield cancel(watcher);
}

// All sagas to be loaded
export default [
  findCoworkByNameWatcher,
];
