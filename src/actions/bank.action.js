import * as types from '../constants/ActionTypes';

let cards = [];

export const newCard = (card) => {
  cards.push(card);
  return {
    type: types.NEW_CARD,
    card
  };
};
