import * as React from "react";
import {CounterStateParent} from "./CounterState";
import {observer} from "mobx-react";

interface Props {
    state: CounterStateParent;
}

@observer
export default class Counter extends React.Component<Props, {}> {

    render() {
        const loading = (this.props.state.counter.loadingCount === 0) ? <p></p> : <p>loading</p>;
        return (
            <div>
                {loading}
                <p>score: {this.props.state.counter.count}</p>
                <button onClick={() => this.props.state.increment(3)}>Increment 3</button>
                <button onClick={() => this.props.state.decrement(2)}>Decrement 2</button>
                <button onClick={() => this.props.state.fetchAmount()}>async bonus 100</button>
            </div>
        )
    }
}