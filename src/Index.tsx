import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppState} from "./State";
import {MyComponent} from "./Hello";

const appState =  new AppState();
ReactDOM.render(<MyComponent appState={appState}/>, document.getElementById('app'));