import './styles/general.css';

import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import storeConfigs from './storeConfigs';

const store = storeConfigs();
const history = syncHistoryWithStore(browserHistory, store);

// expose for debugging
window.store = store;

const App = () => (
  <Provider store={store}>
    <Router history={history}>{routes}</Router>
  </Provider>
);

export default App;
