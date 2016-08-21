import * as React from "react";
import {AppState} from "./AppState";
import {observer} from "mobx-react";

export interface Props {
    appState: AppState;
}

@observer
export class HelloComponent extends React.Component<Props, {}> {
    increment = () => {
        this.props.appState.incrementCounter();
    };

    render() {
        return (
            <div>
                <button onClick={this.increment}>
                    click count(async): {this.props.appState.counter}
                </button>
            </div>
        )
    }
}