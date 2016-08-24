import * as React from "react";
import {Counter} from "./Counter";
import {CounterState} from "./CounterState";

export class CounterRoot extends React.Component<{params: any}, {}> {
    render() {
        const contact = new CounterState();
        return (
            <Counter state={contact} />
        );
    }
}
