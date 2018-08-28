import * as types from '../constants/ActionTypes';

let budget = {
  money: 0
};

export const setBudget = (budget) => ({
  type: types.SET_BUDGET,
  budget: {
    money: budget.money,
    startDate: budget.startDate
  }
});
