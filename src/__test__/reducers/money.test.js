import prettyFormat from 'pretty-format';

import moneyReducer from '../../reducers/money';
import * as types from '../../constants/ActionTypes';

describe('Money Reducer', () => {
  const day = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const date = new Date(year, month, day);

  it('should return the initial state', () => {
    expect(moneyReducer(undefined, {})).toEqual({
      money: 0,
      totalIncomes: 0,
      totalExpenses: 0,
      actions: []
    });
  });

  it('should handle INCOME', () => {
    expect(
      moneyReducer(undefined, {
        type: types.INCOME,
        money: 100,
        name: 'Test Name',
        description: 'Test description',
        selectedMethod: 'Cash',
        selectedCategory: 'Food test',
        notes: 'Note test'
      })
    ).toEqual({
      money: 100,
      totalIncomes: 100,
      totalExpenses: 0,
      actions: [
        {
          amount: 100,
          name: 'Test Name',
          description: 'Test description',
          selectedMethod: 'Cash',
          selectedCategory: 'Food test',
          notes: 'Note test',
          date,
          type: types.INCOME
        }
      ]
    });

    expect(
      moneyReducer(
        {
          money: 100,
          totalIncomes: 100,
          totalExpenses: 0,
          actions: [
            {
              amount: 100,
              name: 'Test Name',
              description: 'Test description',
              selectedMethod: 'Cash',
              selectedCategory: 'Food test',
              notes: 'Note test',
              date: new Date(2018, 8, 8),
              type: types.INCOME
            }
          ]
        },
        {
          type: types.INCOME,
          money: 50,
          name: 'Test 2 Name',
          description: 'Test 2 description',
          selectedMethod: 'Cash',
          selectedCategory: 'Food test 2',
          notes: 'Note test 2'
        }
      )
    ).toEqual({
      money: 150,
      totalIncomes: 150,
      totalExpenses: 0,
      actions: [
        {
          amount: 100,
          name: 'Test Name',
          description: 'Test description',
          selectedMethod: 'Cash',
          selectedCategory: 'Food test',
          notes: 'Note test',
          date: new Date(2018, 8, 8),
          type: types.INCOME
        },
        {
          type: types.INCOME,
          amount: 50,
          name: 'Test 2 Name',
          description: 'Test 2 description',
          selectedMethod: 'Cash',
          selectedCategory: 'Food test 2',
          notes: 'Note test 2',
          date,
          type: types.INCOME
        }
      ]
    });
  });

  it('should handle EXPENSE', () => {
    expect(
      moneyReducer(
        {
          money: 0,
          totalIncomes: 0,
          totalExpenses: 0,
          actions: []
        },
        {
          type: types.EXPENSE,
          money: 100,
          name: 'Test Name',
          description: 'Test description',
          selectedMethod: 'Cash',
          selectedCategory: 'Food test',
          notes: 'Note test'
        }
      )
    ).toEqual({
      money: -100,
      totalIncomes: 0,
      totalExpenses: 100,
      actions: [
        {
          amount: 100,
          name: 'Test Name',
          description: 'Test description',
          selectedMethod: 'Cash',
          selectedCategory: 'Food test',
          notes: 'Note test',
          date,
          type: types.EXPENSE
        }
      ]
    });

    expect(
      moneyReducer(
        {
          money: 100,
          totalIncomes: 0,
          totalExpenses: 100,
          actions: [
            {
              amount: 100,
              name: 'Test Name',
              description: 'Test description',
              selectedMethod: 'Cash',
              selectedCategory: 'Food test',
              notes: 'Note test',
              date,
              type: types.EXPENSE
            }
          ]
        },
        {
          type: types.EXPENSE,
          money: 50,
          name: 'Test Name',
          description: 'Test description',
          selectedMethod: 'Cash',
          selectedCategory: 'Food test',
          notes: 'Note test'
        }
      )
    ).toEqual({
      money: 50,
      totalIncomes: 0,
      totalExpenses: 150,
      actions: [
        {
          amount: 100,
          name: 'Test Name',
          description: 'Test description',
          selectedMethod: 'Cash',
          selectedCategory: 'Food test',
          notes: 'Note test',
          date,
          type: types.EXPENSE
        },
        {
          amount: 50,
          name: 'Test Name',
          description: 'Test description',
          selectedMethod: 'Cash',
          selectedCategory: 'Food test',
          notes: 'Note test',
          date,
          type: types.EXPENSE
        }
      ]
    });
  });
});
