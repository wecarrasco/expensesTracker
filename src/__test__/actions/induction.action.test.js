import * as types from '../../constants/ActionTypes';
import * as actions from '../../actions/induction.action';

describe('Induction Actions', () => {
  it('should set new budget', () => {
    const initialBudget = 1000;

    const expectedAction = {
      type: types.SET_BUDGET,
      induction: {
        initialBudget: 1000
      }
    };

    expect(actions.setBudget(initialBudget)).toEqual(expectedAction);
  });

  it('should set the induction settings', () => {
    const induction = {
      initialBudget: 1000,
      dailyAverage: 100,
      startDate: new Date(2018, 8, 25)
    };

    const expectedAction = {
      type: types.SET_INDUCTION_SETTINGS,
      induction
    };

    expect(actions.setInductionSettings(induction)).toEqual(expectedAction);
  });
});
