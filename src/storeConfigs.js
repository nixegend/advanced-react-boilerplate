import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { apiMiddleware } from 'redux-api-middleware';

import { default as mainReducer } from './mainReducer';

const storeConfigs = () => {
  const middlewares = [
    routerMiddleware(browserHistory),
    thunk,
    apiMiddleware
  ];

  const store = createStore(mainReducer, compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};

export default storeConfigs;