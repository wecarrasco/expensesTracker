import * as types from '../../constants/ActionTypes';
import * as actions from '../../actions/bank.action';

describe('Bank Actions', () => {
  it('should create an action to create new card', () => {
    const card = {
      type: types.NEW_CARD,
      bank: 'Ficohsa',
      name: 'Infinity',
      limit: 5000,
      cutoff_day: 20,
      expense: 0
    };
    const expectedAction = {
      type: types.NEW_CARD,
      cards: [
        {
          type: types.NEW_CARD,
          bank: 'Ficohsa',
          name: 'Infinity',
          limit: 5000,
          cutoff_day: 20,
          expense: 0
        }
      ]
    };

    expect(actions.newCard(card)).toEqual(expectedAction);
  });

  // it('should create an action to calculate expense', () => {
  //   const amountOfMoney = 100;
  //   const expectedAction = {
  //     type: types.EXPENSE,
  //     money: R.negate(amountOfMoney)
  //   };

  //   expect(actions.expense(amountOfMoney)).toEqual(expectedAction);
  // });
});
