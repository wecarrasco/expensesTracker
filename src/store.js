import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();
const initialState = {};
const enhacers = [];

const middleware = [sagaMiddleware, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhacers.push(devToolsExtension());
  }
}

const composedEnhacers = compose(
  applyMiddleware(...middleware),
  ...enhacers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhacers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// sagaMiddleware.run(makeExpense);

store.runSaga = sagaMiddleware.run;

export default store;
