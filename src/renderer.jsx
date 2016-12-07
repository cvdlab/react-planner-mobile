import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app';
import {initStore} from './store';

let store = initStore();

window.store=store;


ReactDOM.render(
  <App store={store}/>,
  document.getElementById('app')
);
