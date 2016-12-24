import * as React from "react";
import {Dispatch} from "redux";
import {increment, decrement, CounterState} from "./module";

interface Props {
  value: CounterState;
  dispatch: Dispatch<any>;
}

export class Counter extends React.Component<Props, {}> {

  render() {
    return (
      <div>
        <p>score: {this.props.value.num}</p>
        <button onClick={() => increment(this.props.dispatch, 3)}>Increment 3</button>
        <button onClick={() => decrement(this.props.dispatch, 2)}>Decrement 2</button>
      </div>
    )
  }
}