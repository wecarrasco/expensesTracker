import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from './containers/App/reducer';
import money from './reducers/money';

export default combineReducers({
  routing: routerReducer,
  app,
  money
});
