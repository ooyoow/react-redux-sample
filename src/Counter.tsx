import * as React from "react";
import {GlobalState} from "./Entities";
import {DispatchActions} from "./DispatchActions";

interface Props {
    value: GlobalState;
    actions: DispatchActions;
}

export class Counter extends React.Component<Props, {}> {

    render() {
        return (
            <div>
                <p>score: {this.props.value.num}</p>
                <button onClick={() => this.props.actions.increment(3)}>Increment 3</button>
                <button onClick={() => this.props.actions.decrement(2)}>Decrement 2</button>
            </div>
        )
    }
}