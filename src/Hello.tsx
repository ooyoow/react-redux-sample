import * as React from "react";
import {AppState} from "./State";
import {observer} from "mobx-react";

export interface Props {
    appState: AppState;
}

@observer
export class MyComponent extends React.Component<Props, {}> {
    onReset = () => {
        this.props.appState.resetTimer();
    };

    render() {
        return (
            <div>
                <button onClick={this.onReset}>
                    Seconds passed: {this.props.appState.timer}
                </button>
            </div>
        )
    }
}