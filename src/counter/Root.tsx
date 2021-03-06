import * as React from "react";
import {Counter} from "./Counter";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {ActionDispatcher} from "./module";

export default connect(
  (store: any) => ({value: store.counter}),
  (dispatch: Dispatch<any>) => ({actions: new ActionDispatcher(dispatch)})
)(Counter);
