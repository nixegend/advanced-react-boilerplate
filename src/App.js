import React from 'react';
import { Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import routes from './routes';
import { default as mainReducer } from './mainReducer';

const middleware = routerMiddleware(browserHistory);
const store = createStore(mainReducer, applyMiddleware(middleware));
const history = syncHistoryWithStore(browserHistory, store);

const App = () => (
  <Provider store={store}>
    <Router history={history}>{routes}</Router>
  </Provider>
);

export default App;
