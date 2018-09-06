import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import { Route, Switch } from 'react-router';
// import App from './containers/App/App';
import Wiz from './containers/App/Wizard/Wizard2';
import Dashboard from './containers/App/Dashboard';
import registerServiceWorker from './registerServiceWorker';
import Sagas from './sagas/sagas';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

Sagas.map(store.runSaga);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/home" component={Dashboard} />
        <Route exact path="/" component={Wiz} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
