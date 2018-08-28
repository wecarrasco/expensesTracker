import * as types from '../constants/ActionTypes';

const initialState = {
  money: 0,
  startDate: new Date(2000, 8, 25)
};

const budget = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_BUDGET:
      state = action.budget;
      return state;

    default:
      return state;
  }
};

export default budget;
