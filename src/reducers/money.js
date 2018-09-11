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
      state.actions.push({
        amount: action.money,
        name: action.name,
        description: action.description,
        selectedMethod: action.selectedMethod,
        selectedCategory: action.selectedCategory,
        notes: action.notes,
        date: new Date(),
        type: action.type
      });
      return {
        ...state,
        money: state.money + action.money,
        totalIncomes: state.totalIncomes + action.money,
        actions: state.actions
      };

    case types.EXPENSE:
      state.actions.push({
        amount: action.money,
        name: action.name,
        description: action.description,
        selectedCategory: action.selectedCategory,
        selectedMethod: action.selectedMethod,
        notes: action.notes,
        date: new Date(),
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
