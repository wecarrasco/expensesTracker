import inductionReducer from '../../reducers/induction';
import * as types from '../../constants/ActionTypes';

describe('Budget Reducer', () => {
  it('should return the initial state', () => {
    expect(inductionReducer(undefined, {})).toEqual({
      initialBudget: 0,
      dailyAverage: 0,
      startDate: new Date(2000, 8, 25),
      savings: 0
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
      startDate: new Date(2000, 8, 25),
      savings: 50
    });
  });
});
