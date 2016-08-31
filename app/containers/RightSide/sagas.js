import { take, call, put, fork, select } from 'redux-saga/effects';
import { GET_COWORK_BY_KEY } from './constants';
import { coworkLoaded, coworkLoadingError } from './actions';
import { selectCurrentFilters } from './selectors';
import coworksAPI from 'utils/graphql';

const queryState = {};

export function* getCoworkByKey() {
  try {
    const { value } = yield select(selectCurrentFilters());
    if (!value) {
      yield put(coworkLoadingError(true));
    } else {
      const cowork = yield call(() => coworksAPI.get(`
        {
          coworkByName(name:"${value}") {
            name
            longDescription
            latitud
            longitud
            phoneNumber
            number
            street
            webpage
            city {
              name
              id
            }
            country {
              name
              id
            }
          }
        }
      `)
      .then((data) => data.json())
      .then((data) => data.data)
      .catch(console.error)); // eslint-disable-line no-console
      yield put(coworkLoaded(cowork.coworkByName));
    }
  } catch (err) {
    yield put(coworkLoadingError(true));
  }
}

export function* findCoworkByNameWatcher() {
  while (true) { // eslint-disable-line no-constant-condition
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
