import { INCOME, EXPENSE, SET_BUDGET } from '../constants/ActionTypes';

export const setInitialBudget = (amount) => ({
  type: SET_BUDGET,
  money: amount
});

export const income = ({
  amount,
  name,
  description,
  selectedMethod,
  notes
}) => ({
  type: INCOME,
  money: amount,
  name,
  description,
  selectedMethod,
  notes,
  selectedCategory: 'INCOME'
});

export const expense = ({
  amount,
  name,
  description,
  selectedCategory,
  selectedMethod,
  notes
}) => ({
  type: EXPENSE,
  money: amount,
  name,
  description,
  selectedCategory,
  selectedMethod,
  notes
});
