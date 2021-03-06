import * as React from "react";
import {CounterState, ActionDispatcher} from "./module";

interface Props {
  value: CounterState;
  actions: ActionDispatcher;
}

export class Counter extends React.Component<Props, {}> {

  render() {
    const loading = (this.props.value.loadingCount === 0) ? null : <p>loading</p>;
    return (
      <div>
        {loading}
        <p>{`score: ${this.props.value.num}`}</p>
        <button onClick={() => this.props.actions.increment(3)}>Increment 3</button>
        <button onClick={() => this.props.actions.decrement(2)}>Decrement 2</button>
        <button onClick={() => this.props.actions.fetchAmount()}>async bonus 100</button>
      </div>
    )
  }
}