import { put, takeLatest } from 'redux-saga/effects';

import { EXPENSE } from '../constants/ActionTypes';
import { expense } from '../actions/money.action';
import { decrementSavings } from '../actions/induction.action';

export function* expenseSavings(money) {
  console.log('hiola');
  console.log(money);
  try {
    yield put(expense(money));
    yield put(decrementSavings(money));
  } catch (err) {
    console.log(err);
    yield put(expense(money));
    yield put(decrementSavings(money));
  }
}

export function* makeExpense() {
  try {
    yield takeLatest(EXPENSE, expenseSavings);
  } catch (err) {
    console.log(err);
  }
}

export default [makeExpense];
