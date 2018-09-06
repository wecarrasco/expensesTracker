import { ADD_CATEGORY } from '../constants/ActionTypes';

const initialState = {
  Categories: [
    {
      name: 'Food',
      color: 'red'
    }
  ]
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return state.Categories.push({ name: action.name, color: action.color });
    default:
      return state;
  }
};

export default settings;
