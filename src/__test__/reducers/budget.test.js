import budgetReducer from '../../reducers/budget';
import * as types from '../../constants/ActionTypes';

describe('Budget Reducer', () => {
  it('should return the initial state', () => {
    expect(budgetReducer(undefined, {})).toEqual({
      money: 0,
      startDate: new Date(2000, 8, 25)
    });
  });

  it('should set budget', () => {
    expect(
      budgetReducer(undefined, {
        type: types.SET_BUDGET,
        budget: {
          money: 1000,
          startDate: new Date(2018, 8, 25)
        }
      })
    ).toEqual({
      money: 1000,
      startDate: new Date(2018, 8, 25)
    });

    expect(
      budgetReducer(
        {
          money: 2000,
          startDate: new Date(2018, 8, 20)
        },
        {
          type: types.SET_BUDGET,
          budget: {
            money: 1000,
            startDate: new Date(2018, 8, 25)
          }
        }
      )
    ).toEqual({
      money: 1000,
      startDate: new Date(2018, 8, 25)
    });
  });
});
