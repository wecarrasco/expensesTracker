import * as types from '../../constants/ActionTypes';
import * as actions from '../../actions/budget.action';

describe('Budget Actions', () => {
  it('should set new budget', () => {
    const budget = {
      money: 1000,
      startDate: new Date(2018, 8, 25)
    };

    const expectedAction = {
      type: types.SET_BUDGET,
      budget: {
        money: 1000,
        startDate: new Date(2018, 8, 25)
      }
    };

    expect(actions.setBudget(budget)).toEqual(expectedAction);
  });
});
