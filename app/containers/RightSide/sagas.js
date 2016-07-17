import { take, call, put, select } from 'redux-saga/effects';
import { GET_COWORK_BY_KEY } from './constants';
import { coworkLoaded, coworkLoadingError } from './actions';
import { firebaseDb } from 'utils/firebase';


export function* getCoworkByKey(key, val) {
  const coworkByKey = yield call(() => firebaseDb
      .ref('/coworks')
      .orderByChild('nombre')
      .equalTo('Centro Corfo')
      .once('value')
      .then((snapshot) => snapshot.val())
      .catch((data) => ({ error: data }))
  );
  console.log(key);
  console.log(val);
  console.log(coworkByKey);
  debugger;
  if (coworkByKey.error) {
    yield put(coworkLoadingError(coworkByKey.error));
  } else {
    yield put(coworkLoaded(coworkByKey));
  }
}

export function* findCoworkByNameWatcher() {
  while (yield take(GET_COWORK_BY_KEY)) {
    yield call(getCoworkByKey);
  }
}

// All sagas to be loaded
export default [
  findCoworkByNameWatcher,
];
