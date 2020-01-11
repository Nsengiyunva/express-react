import React from 'react';

import { logger } from 'redux-logger';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore} from 'redux';
import allReducers from './_reducers'
import thunk from 'redux-thunk';

import App from './App';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const middlewares = [thunk];
const store = createStore(allReducers, applyMiddleware(...middlewares, logger ))


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
