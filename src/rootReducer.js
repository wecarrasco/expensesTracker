import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from './containers/App/reducer';

export default combineReducers({
  routing: routerReducer,
  app
});
