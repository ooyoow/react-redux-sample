import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppState} from "./AppState";
import {HelloComponent} from "./Hello";
require('es6-promise').polyfill();

const appState =  new AppState();
ReactDOM.render(<HelloComponent appState={appState}/>, document.getElementById('app'));