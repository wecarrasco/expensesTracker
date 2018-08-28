import { combineReducers } from 'redux';
import money from './money';
import bank from './bank';

export default combineReducers({
  money,
  bank
});
