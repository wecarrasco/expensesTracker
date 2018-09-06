import * as types from '../constants/ActionTypes';

const money = 0;

export const income = (amountOfMoney) => ({
  type: types.INCOME,
  money: money + amountOfMoney
});

export const expense = (amountOfMoney) => ({
  type: types.EXPENSE,
  money: money - amountOfMoney
});
