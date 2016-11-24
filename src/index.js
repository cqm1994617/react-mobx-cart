import AppState from './stores/AppState';
import { autorun } from 'mobx';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
require('babel-polyfill');
ReactDOM.render(<App appStore={AppState} />, document.getElementById('container'));
