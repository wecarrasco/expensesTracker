import moneyReducer from '../../reducers/money';
import * as types from '../../constants/ActionTypes';

describe('Money Reducer', () => {
  it('should return the initial state', () => {
    expect(moneyReducer(undefined, {})).toEqual({
      money: 0,
      totalIncomes: 0,
      totalExpenses: 0
    });
  });

  it('should handle INCOME', () => {
    expect(
      moneyReducer(undefined, {
        type: types.INCOME,
        money: 100
      })
    ).toEqual({
      money: 100,
      totalIncomes: 100,
      totalExpenses: 0
    });

    expect(
      moneyReducer(
        {
          money: 100,
          totalIncomes: 100,
          totalExpenses: 0
        },
        {
          type: types.INCOME,
          money: 50
        }
      )
    ).toEqual({
      money: 150,
      totalIncomes: 150,
      totalExpenses: 0
    });
  });

  it('should handle EXPENSE', () => {
    expect(
      moneyReducer(undefined, {
        type: types.EXPENSE,
        money: 100
      })
    ).toEqual({
      money: -100,
      totalIncomes: 0,
      totalExpenses: 100
    });

    expect(
      moneyReducer(
        {
          money: 100,
          totalIncomes: 0,
          totalExpenses: 100
        },
        {
          type: types.EXPENSE,
          money: 50
        }
      )
    ).toEqual({
      money: 50,
      totalIncomes: 0,
      totalExpenses: 150
    });
  });
});
