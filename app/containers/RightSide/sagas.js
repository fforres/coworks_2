import { take, call, put, select } from 'redux-saga/effects';
import { takeEvery, takeLatest } from 'redux-saga';
import { GET_COWORK_BY_KEY } from './constants';
import { coworkLoaded, coworkLoadingError } from './actions';
import { firebaseDb } from 'utils/firebase';


export function* getCoworkByKey({ key, value }) {
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
  yield takeLatest(GET_COWORK_BY_KEY, getCoworkByKey);
}

// All sagas to be loaded
export default [
  findCoworkByNameWatcher,
];
