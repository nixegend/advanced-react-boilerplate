import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const APP = document.getElementById('app');

ReactDOM.render(<AppContainer><App /></AppContainer>, APP);

if (module.hot) {
    module.hot.accept('./components/App', () => {
       const NextApp = require('./components/App').default;
       ReactDOM.render(<AppContainer><NextApp /></AppContainer>, APP);
    });
}