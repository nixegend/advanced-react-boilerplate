import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const APP = document.getElementById('app');

ReactDOM.render(<AppContainer><App /></AppContainer>, APP);

if (module.hot) {
    module.hot.accept('./App', () => {
       const NextApp = require('./App').default;
       ReactDOM.render(<AppContainer><NextApp /></AppContainer>, APP);
    });
}