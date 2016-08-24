import {observer} from "mobx-react";
import * as React from "react";
import Counter from "./Counter";
import {CounterStateParent} from "./CounterState";

@observer
export class CounterRoot extends React.Component<{params: any}, {}> {
    render() {
        const contact = new CounterStateParent();
        // contact.counter.count;
        return (
            <Counter state={contact} />
        );
    }
}
