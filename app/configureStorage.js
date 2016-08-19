import storage from 'redux-storage';
// import storageDebounce from 'redux-storage-decorator-debounce';
import filter from 'redux-storage-decorator-immutable-filter';
import { fromJS } from 'immutable';
import createEngine from './localForageEngine';

const updateState = (state, storageStateJson) => {
  try {
    state = state.mergeDeep(fromJS(storageStateJson)); // eslint-disable-line no-param-reassign
  } catch (error) {
    console.error(error);
  }
  return state;
};

const createStorageMiddleware = storageEngine => {
  const decoratedEngine = filter(storageEngine, ['login'], ['router', 'coworks']);
  // decoratedEngine = storageDebounce(decoratedEngine, 300); //TODO: Check if this is actually useful.
  return storage.createMiddleware(decoratedEngine);
};

export const updateStateOnStorageLoad = reducer => (state, action) => {
  if (action.type === storage.LOAD) {
    state = updateState(state, action.payload); // eslint-disable-line no-param-reassign
  }
  return reducer(state, action);
};

export default function configureStorage() {
  const storageEngine =
    createEngine &&
    createEngine('FFORRES_REDUX_STORAGE_KEY');
  const storageMiddleware =
    storageEngine &&
    createStorageMiddleware(storageEngine);
  const loader = storage.createLoader(storageEngine);

  return {
    STORAGE_SAVE: storage.SAVE,
    storageEngine,
    loader,
    storageMiddleware,
  };
}
