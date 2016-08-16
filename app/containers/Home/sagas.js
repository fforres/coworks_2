import { take, call, put } from 'redux-saga/effects';
import { GET_COWORKS } from './constants';
import { coworksLoaded, coworksLoadingError } from './actions';
import coworksAPI from 'utils/graphql';

// Get a list of default coworks;
export function* getCoworks() {
  try {
    const coworksGraphQL = yield call(() => coworksAPI.get(`
        {
          coworkList {
            name
            id
            shortDescription
            number
            street
            latitud
            longitud
            city {
              name
            }
            country {
              name
            }
          }
        }
      `)
      .then((data) => data.json())
      .then((data) => data.data)
      .catch(console.error)
    );
    yield put(coworksLoaded(coworksGraphQL.coworkList));
  } catch (err) {
    console.error(err);
    yield put(coworksLoadingError(true));
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
