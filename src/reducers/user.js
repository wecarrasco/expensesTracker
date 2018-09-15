import { SET_USER } from '../constants/ActionTypes';

const initialState = {
  user: ''
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      state = {
        user: action.user
      };
      return state;

    default:
      return state;
  }
};

export default user;
