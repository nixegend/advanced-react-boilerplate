import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { default as navMenu } from './components/nav-menu/reducer';

const mainReducer = combineReducers({ navMenu, routing });

export default mainReducer;
