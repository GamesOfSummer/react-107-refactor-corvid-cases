import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// eslint-disable-next-line import/no-extraneous-dependencies
import invariant from 'redux-immutable-state-invariant';

import * as serviceWorker from './serviceWorker';
import './index.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import App from './App.tsx';

import {reducer} from './redux/reducer/reducer';


const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(invariant()),
));

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
