import * as types from '../constants/ActionTypes';

const initialState = {
  initialBudget: 0,
  dailyAverage: 0,
  startDate: new Date(2000, 8, 25),
  savings: 0
};

const budget = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_BUDGET:
      state.initialBudget = action.induction.initialBudget;
      return { ...state, initialBudget: state.initialBudget };

    case types.SET_INDUCTION_SETTINGS:
      state = {
        ...state,
        ...action.induction,
        savings: action.induction.dailyAverage
      };
      return state;

    case types.DECREMENT_SAVINGS:
      state = {
        ...state,
        savings: state.savings - action.money
      };
      return state;

    default:
      return state;
  }
};

export default budget;
