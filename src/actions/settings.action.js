import { ADD_CATEGORY } from '../constants/ActionTypes';

export const addCategory = ({ name, color }) => ({
  type: ADD_CATEGORY,
  name,
  color
});
