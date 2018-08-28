import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducers from './reducers/index';

export default combineReducers({
  routing: routerReducer,
  reducers
});
