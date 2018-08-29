import * as types from '../constants/ActionTypes';

let budget = {
  initialBudget: 0,
  dailyAverage: 0
};

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
