import * as types from '../constants/ActionTypes';

const initialState = {
  money: 0,
  totalIncomes: 0,
  totalExpenses: 0,
  actions: []
};

const money = (state = initialState, action) => {
  switch (action.type) {
    case types.INCOME:
      const dayIncome = new Date().getDate();
      const monthIncome = new Date().getMonth();
      const yearIncome = new Date().getFullYear();

      const dateIncome = new Date(yearIncome, monthIncome, dayIncome);
      state.actions.push({
        amount: action.money,
        name: action.name,
        description: action.description,
        selectedMethod: action.selectedMethod,
        selectedCategory: action.selectedCategory,
        notes: action.notes,
        date: dateIncome,
        type: action.type
      });
      return {
        ...state,
        money: state.money + action.money,
        totalIncomes: state.totalIncomes + action.money,
        actions: state.actions
      };

    case types.EXPENSE:
      const day = new Date().getDate();
      const month = new Date().getMonth();
      const year = new Date().getFullYear();

      const date = new Date(year, month, day);
      state.actions.push({
        amount: action.money,
        name: action.name,
        description: action.description,
        selectedCategory: action.selectedCategory,
        selectedMethod: action.selectedMethod,
        notes: action.notes,
        date,
        type: action.type
      });
      return {
        ...state,
        money: state.money - action.money,
        totalExpenses: state.totalExpenses + action.money,
        actions: state.actions
      };

    case types.SET_BUDGET:
      return {
        ...state,
        money: state.money + action.money
      };

    default:
      return state;
  }
};

export default money;
