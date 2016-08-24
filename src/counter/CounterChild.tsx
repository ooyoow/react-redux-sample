import * as React from "react";
import {CounterState} from "./CounterState";

interface Props {
    state: CounterState
}

export const CounterChild = (props: Props) => {
    const loading = (props.state.counter.loadingCount === 0) ? <p></p> : <p>loading</p>;
    return (
        <div>
            {loading}
            <p>score: {props.state.counter.count}</p>
            <button onClick={() => props.state.increment(3)}>Increment 3</button>
            <button onClick={() => props.state.decrement(2)}>Decrement 2</button>
            <button onClick={() => props.state.fetchAmount()}>async bonus 100</button>
        </div>
    )
};