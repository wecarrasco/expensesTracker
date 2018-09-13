import * as types from '../../constants/ActionTypes';
import * as actions from '../../actions/induction.action';

describe('Induction Actions', () => {
  it('should create an action to set the induction settings', () => {
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

  it('should create an action to decrement the savins', () => {
    const expectedAction = {
      type: types.DECREMENT_SAVINGS,
      money: 100
    };

    expect(actions.decrementSavings(100)).toEqual(expectedAction);
  });
});
