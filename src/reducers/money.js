import * as types from '../constants/ActionTypes';

const initialState = {
  money: 0,
  totalIncomes: 0,
  totalExpenses: 0
};

const money = (state = initialState, action) => {
  switch (action.type) {
    case types.INCOME:
      return {
        money: state.money + action.money,
        totalIncomes: state.totalIncomes + action.money,
        totalExpenses: state.totalExpenses
      };

    case types.EXPENSE:
      return {
        money: state.money - action.money,
        totalIncomes: state.totalIncomes,
        totalExpenses: state.totalExpenses + action.money
      };

    default:
      return state;
  }
};

export default money;
