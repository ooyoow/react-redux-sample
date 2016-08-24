import {observer} from "mobx-react";
import * as React from "react";
import {Counter} from "./Counter";
import {CounterState} from "./CounterState";

@observer
export class CounterRoot extends React.Component<{params: any}, {}> {
    render() {
        const contact = new CounterState();
        // contact.counter.count;
        return (
            <Counter state={contact} />
        );
    }
}
