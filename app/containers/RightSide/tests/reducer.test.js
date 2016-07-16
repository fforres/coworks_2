import expect from 'expect';
import rightSideReducer from '../reducer';
import { fromJS } from 'immutable';

describe('rightSideReducer', () => {
  it('returns the initial state', () => {
    expect(rightSideReducer(undefined, {})).toEqual(fromJS({}));
  });
});
