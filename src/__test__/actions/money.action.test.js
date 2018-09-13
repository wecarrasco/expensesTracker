// import R from 'ramda';

import * as types from '../../constants/ActionTypes';
import * as actions from '../../actions/money.action';

describe('Money Actions', () => {
  it('should create an action to calculate income', () => {
    const income = {
      amount: 100,
      name: 'Test Name',
      description: 'Test Description',
      selectedMethod: 'Credit Card',
      notes: 'Test notes'
    };
    const expectedAction = {
      type: types.INCOME,
      money: 100,
      name: 'Test Name',
      description: 'Test Description',
      selectedMethod: 'Credit Card',
      notes: 'Test notes',
      selectedCategory: 'INCOME'
    };

    expect(actions.income(income)).toEqual(expectedAction);
  });

  it('should create an action to calculate expense', () => {
    const expense = {
      amount: 100,
      name: 'Test Name',
      description: 'Test Description',
      selectedMethod: 'Credit Card',
      notes: 'Test notes',
      selectedCategory: 'INCOME'
    };
    const expectedAction = {
      type: types.EXPENSE,
      money: expense.amount,
      name: 'Test Name',
      description: 'Test Description',
      selectedMethod: 'Credit Card',
      notes: 'Test notes',
      selectedCategory: 'INCOME'
    };

    expect(actions.expense(expense)).toEqual(expectedAction);
  });
});
