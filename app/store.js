/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga/dist/redux-saga';
import createReducer from './reducers';
import configureStorage, { updateStateOnStorageLoad } from './configureStorage';

const { storageMiddleware, loader } = configureStorage();
const sagaMiddleware = createSagaMiddleware();
const devtools = window.devToolsExtension || (() => noop => noop);

export default function configureStore(initialState = {}, history, callback) {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
    storageMiddleware,
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
    devtools(),
  ];

  const reducer = createReducer();
  const store = createStore(
    updateStateOnStorageLoad(reducer),
    initialState,
    compose(...enhancers)
  );

  // Create hook for async sagas
  store.runSaga = sagaMiddleware.run;

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    System.import('./reducers').then((reducerModule) => {
      const createReducers = reducerModule.default;
      const nextReducers = updateStateOnStorageLoad(createReducers(store.asyncReducers));

      store.replaceReducer(nextReducers);
    });
  }

  // Initialize it with no other reducers
  store.asyncReducers = {};
  loader(store).then(() => {
    callback(store);
  }).catch(console.error);
}
