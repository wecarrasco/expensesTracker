import { ADD_CATEGORY, GET_CATEGORIES } from '../constants/ActionTypes';

const initialState = {
  Categories: []
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      state.Categories.push({ name: action.name });
      return state;

    case GET_CATEGORIES:
      return state;

    default:
      return state;
  }
};

export default settings;
