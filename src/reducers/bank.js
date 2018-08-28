import * as types from '../constants/ActionTypes';

const initialState = [];

const bank = (state = initialState, action) => {
  switch (action.type) {
    case types.NEW_CARD:
      state.push(action.card);
      return state;

    default:
      return state;
  }
};

export default bank;
