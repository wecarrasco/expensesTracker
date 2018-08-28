import bankReducer from '../../reducers/bank';
import * as types from '../../constants/ActionTypes';

describe('Bank Credit/Debit Card Reducer', () => {
  it('Should return the initial state', () => {
    expect(bankReducer(undefined, {})).toEqual([]);
  });

  it('Should add new card', () => {
    expect(
      bankReducer(undefined, {
        type: types.NEW_CARD,
        card: {
          bank: 'Ficohsa',
          name: 'Infinity',
          limit: 5000,
          cutoff_day: 20,
          expense: 0
        }
      })
    ).toEqual([
      {
        bank: 'Ficohsa',
        name: 'Infinity',
        limit: 5000,
        cutoff_day: 20,
        expense: 0
      }
    ]);

    expect(
      bankReducer(
        [
          {
            bank: 'Ficohsa',
            name: 'Infinity',
            limit: 5000,
            cutoff_day: 20,
            expense: 0
          }
        ],
        {
          type: types.NEW_CARD,
          card: {
            bank: 'Bac',
            name: 'Black Card',
            limit: 2000,
            cutoff_day: 2,
            expense: 0
          }
        }
      )
    ).toEqual([
      {
        bank: 'Ficohsa',
        name: 'Infinity',
        limit: 5000,
        cutoff_day: 20,
        expense: 0
      },
      {
        bank: 'Bac',
        name: 'Black Card',
        limit: 2000,
        cutoff_day: 2,
        expense: 0
      }
    ]);
  });
});
