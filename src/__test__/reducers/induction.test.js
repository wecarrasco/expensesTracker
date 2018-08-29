import inductionReducer from '../../reducers/induction';
import * as types from '../../constants/ActionTypes';

describe('Budget Reducer', () => {
  it('should return the initial state', () => {
    expect(inductionReducer(undefined, {})).toEqual({
      initialBudget: 0,
      dailyAverage: 0,
      startDate: new Date(2000, 8, 25)
    });
  });

  it('should set the induction settings and receive them', () => {
    expect(
      inductionReducer(undefined, {
        type: types.SET_INDUCTION_SETTINGS,
        induction: {
          initialBudget: 100,
          dailyAverage: 50,
          startDate: new Date(2000, 8, 25)
        }
      })
    ).toEqual({
      initialBudget: 100,
      dailyAverage: 50,
      startDate: new Date(2000, 8, 25)
    });
  });

  it('should set budget and receive new budget value', () => {
    expect(
      inductionReducer(undefined, {
        type: types.SET_BUDGET,
        induction: {
          initialBudget: 1005
        }
      })
    ).toEqual({
      initialBudget: 1005,
      dailyAverage: 0,
      startDate: new Date(2000, 8, 25)
    });

    expect(
      inductionReducer(
        {
          initialBudget: 100,
          dailyAverage: 50,
          startDate: new Date(2000, 8, 25)
        },
        {
          type: types.SET_BUDGET,
          induction: {
            initialBudget: 1000
          }
        }
      )
    ).toEqual({
      initialBudget: 1000,
      dailyAverage: 50,
      startDate: new Date(2000, 8, 25)
    });
  });
});
