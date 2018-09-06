import * as types from '../constants/ActionTypes';

export const setBudget = (initialBudget) => ({
  type: types.SET_BUDGET,
  induction: {
    initialBudget
  }
});

export const setInductionSettings = (settings) => ({
  type: types.SET_INDUCTION_SETTINGS,
  induction: { ...settings }
});

export const decrementSavings = (money) => ({
  type: types.DECREMENT_SAVINGS,
  money
});
