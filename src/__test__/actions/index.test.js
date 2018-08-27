import R from 'ramda';

import * as types from '../../constants/ActionTypes';
import * as actions from '../../actions';

describe('Actions', () => {
  it('should create an action to calculate income', () => {
    const amountOfMoney = 100;
    const expectedAction = {
      type: types.INCOME,
      money: amountOfMoney
    };

    expect(actions.income(amountOfMoney)).toEqual(expectedAction);
  });

  it('should create an action to calculate expense', () => {
    const amountOfMoney = 100;
    const expectedAction = {
      type: types.EXPENSE,
      money: R.negate(amountOfMoney)
    };

    expect(actions.expense(amountOfMoney)).toEqual(expectedAction);
  });
});
