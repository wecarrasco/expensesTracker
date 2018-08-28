import moneyReducer from '../../reducers/money';
import * as types from '../../constants/ActionTypes';

describe('Money Reducer', () => {
  it('should return the initial state', () => {
    expect(moneyReducer(undefined, {})).toEqual({
      money: 0
    });
  });

  it('should handle INCOME', () => {
    expect(
      moneyReducer(undefined, {
        type: types.INCOME,
        money: 100
      })
    ).toEqual({
      money: 100
    });

    expect(
      moneyReducer(
        { money: 100 },
        {
          type: types.INCOME,
          money: 50
        }
      )
    ).toEqual({
      money: 150
    });
  });

  it('should handle EXPENSE', () => {
    expect(
      moneyReducer(undefined, {
        type: types.EXPENSE,
        money: 100
      })
    ).toEqual({
      money: -100
    });

    expect(
      moneyReducer(
        { money: 100 },
        {
          type: types.EXPENSE,
          money: 50
        }
      )
    ).toEqual({
      money: 50
    });
  });
});
