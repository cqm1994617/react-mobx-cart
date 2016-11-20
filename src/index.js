import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import AppState from './AppState';
require('babel-polyfill');

const appstate = new AppState();

ReactDOM.render(<App appState={appstate} />, document.getElementById('container'));
