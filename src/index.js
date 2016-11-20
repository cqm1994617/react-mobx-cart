import AppState from './AppState';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
require('babel-polyfill');

const appState = new AppState();

ReactDOM.render(<App appState={appState} />, document.getElementById('container'));
