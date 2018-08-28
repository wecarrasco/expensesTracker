import * as types from '../constants/ActionTypes';
import * as R from 'ramda';

const initialState = [];

const bank = (state = initialState, action) => {
  switch (action.type) {
    case types.NEW_CARD:
      state.push({
        ...action.card,
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
      });
      return state;

    case types.CARD_EXPENSE:
      const cardIndex = state.findIndex((card) => card.id === action.id);
      const creditCard = {
        ...state[cardIndex],
        expense: state[cardIndex].expense + action.expense
      };

      const newState = R.update(cardIndex, creditCard, state);
      return newState;

    default:
      return state;
  }
};

export default bank;
