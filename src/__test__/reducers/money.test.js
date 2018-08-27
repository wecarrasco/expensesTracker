import moneyReducer from '../../reducers/money';
import * as types from '../../constants/ActionTypes';

describe('Money Reducer', () => {
  it('should return the initial state', () => {
    expect(moneyReducer(undefined, {})).toEqual([
      {
        money: 0
      }
    ]);
  });
});
