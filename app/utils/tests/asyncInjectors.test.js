/**
 * Test async injectors
 */

import expect from 'expect';
import configureStore from 'store.js';
import { browserHistory } from 'react-router';
import { put } from 'redux-saga/effects';
import { fromJS } from 'immutable';

import {
  injectAsyncReducer,
  injectAsyncSagas,
  getAsyncInjectors,
} from 'utils/asyncInjectors';

// Fixtures
const initialState = fromJS({ reduced: 'soon' });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST':
      return state.set('reduced', action.payload);
    default:
      return state;
  }
};

function* testSaga() {
  yield put({ type: 'TEST', payload: 'yup' });
}

const sagas = [
  testSaga,
];

describe('asyncInjectors', () => {
  describe('getAsyncInjectors', () => {
    it('given a store, should return all async injectors', () => {
      configureStore(initialState, browserHistory, (store) => {
        const { injectReducer, injectSagas } = getAsyncInjectors(store);

        injectReducer('test', reducer);
        injectSagas(sagas);

        const actual = store.getState().get('test');
        const expected = initialState.merge({ reduced: 'yup' });

        expect(actual.toJS()).toEqual(expected.toJS());
      });
    });

    it('should throw if passed invalid store shape', () => {
      configureStore(initialState, browserHistory, (store) => {
        let result = false;

        Reflect.deleteProperty(store, 'dispatch');

        try {
          getAsyncInjectors(store);
        } catch (err) {
          result = err.name === 'Invariant Violation';
        }

        expect(result).toEqual(true);
      });
    });
  });

  describe('helpers', () => {
    describe('injectAsyncReducer', () => {
      it('given a store, it should provide a function to inject a reducer', () => {
        configureStore(initialState, browserHistory, (store) => {
          const injectReducer = injectAsyncReducer(store);

          injectReducer('test', reducer);

          const actual = store.getState().get('test');
          const expected = initialState;

          expect(actual.toJS()).toEqual(expected.toJS());
        });
      });

      it('should throw if passed invalid name', () => {
        let result = false;
        configureStore(initialState, browserHistory, (store) => {
          const injectReducer = injectAsyncReducer(store);

          try {
            injectReducer('', reducer);
          } catch (err) {
            result = err.name === 'Invariant Violation';
          }

          try {
            injectReducer(999, reducer);
          } catch (err) {
            result = err.name === 'Invariant Violation';
          }

          expect(result).toEqual(true);
        });
      });

      it('should throw if passed invalid reducer', () => {
        let result = false;
        configureStore(initialState, browserHistory, (store) => {
          const injectReducer = injectAsyncReducer(store);

          try {
            injectReducer('bad', 'nope');
          } catch (err) {
            result = err.name === 'Invariant Violation';
          }

          try {
            injectReducer('coolio', 12345);
          } catch (err) {
            result = err.name === 'Invariant Violation';
          }

          expect(result).toEqual(true);
        });
      });
    });

    describe('injectAsyncSagas', () => {
      it('given a store, it should provide a function to inject a saga', () => {
        configureStore(initialState, browserHistory, (store) => {
          const injectSagas = injectAsyncSagas(store);

          injectSagas(sagas);

          const actual = store.getState().get('test');
          const expected = initialState.merge({ reduced: 'yup' });

          expect(actual.toJS()).toEqual(expected.toJS());
        });
      });

      it('should throw if passed invalid saga', () => {
        let result = false;
        configureStore(initialState, browserHistory, (store) => {
          const injectSagas = injectAsyncSagas(store);

          try {
            injectSagas({ testSaga });
          } catch (err) {
            result = err.name === 'Invariant Violation';
          }

          try {
            injectSagas(testSaga);
          } catch (err) {
            result = err.name === 'Invariant Violation';
          }

          expect(result).toEqual(true);
        });
      });
    });
  });
});
