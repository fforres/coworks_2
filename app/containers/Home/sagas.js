import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { GET_COWORKS } from './constants';
import { coworksLoaded, coworksLoadingError } from './actions';
import { firebaseDb } from 'utils/firebase';


// Get a list of default coworks;
export function* getCoworks() {
  const coworks = yield call(() => firebaseDb
      .ref('/coworks')
      .once('value')
      .then((snapshot) => snapshot.val())
      .catch((data) => ({ error: data }))
  );

  if (coworks.error) {
    yield put(coworksLoadingError(coworks.error));
  } else {
    const coworksArr = [];
    Object.keys(coworks).forEach((el) => {
      coworksArr.push(coworks[el]);
    });
    yield put(coworksLoaded(coworks, coworksArr));
  }
}

// Watches for when the GET_COWORKS default action is dispatched;
export function* getCoworksWatcher() {
  while (yield take(GET_COWORKS)) {
    yield call(getCoworks);
  }
  // yield take(LOCATION_CHANGE);
  // yield cancel(watcher1);
  // yield cancel(watcher2);
}

// All sagas to be loaded
export default [
  getCoworksWatcher,
];
