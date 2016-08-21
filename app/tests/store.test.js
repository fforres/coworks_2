/**
 * Test store addons
 */

import expect from 'expect';
import configureStore from '../store'; // eslint-disable-line
import { browserHistory } from 'react-router';
import { fromJS } from 'immutable';
const initialState = fromJS({});

describe('configureStore', () => {
  // before(() => {
  //   store = configureStore({}, browserHistory);
  // });

  describe('asyncReducers', () => {
    it('should contain an object for async reducers', () => {
      configureStore(initialState, browserHistory, (store) => {
        expect(typeof store.asyncReducers).toEqual('object');
      });
    });
  });

  describe('runSaga', () => {
    it('should contain a hook for `sagaMiddleware.run`', () => {
      configureStore(initialState, browserHistory, (store) => {
        expect(typeof store.runSaga).toEqual('function');
      });
    });
  });
});
