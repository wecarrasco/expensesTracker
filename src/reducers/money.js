import * as types from '../constants/ActionTypes';

const initialState = {
  money: 0
};

const money = (state = initialState, action) => {
  switch (action.type) {
    case types.INCOME:
      return {
        money: state.money + action.money
      };

    case types.EXPENSE:
      return {
        money: state.money - action.money
      };

    default:
      return state;
  }
};

export default money;
