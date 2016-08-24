import * as React from "react";
import {CounterState} from "./CounterState";
import {observer} from "mobx-react";
import {CounterChild} from "./CounterChild";

interface Props {
    state: CounterState
}

export const Counter = observer((props: Props) => {
        console.log("action");
        const loading = (props.state.loadingCount.get().loadingCount === 0) ? <p></p> : <p>loading</p>;
        return (
            <div>
                {loading}
                <p>score: {props.state.count.get().count}</p>
                <button onClick={() => props.state.increment(3)}>Increment 3</button>
                <button onClick={() => props.state.decrement(2)}>Decrement 2</button>
                <button onClick={() => props.state.fetchAmount()}>async bonus 100</button>

                <CounterChild loadingCount={props.state.loadingCount.get()} />
            </div>
        )
    }
);