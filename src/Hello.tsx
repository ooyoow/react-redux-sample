import * as React from "react";
import {AppState} from "./AppState";
import {observer} from "mobx-react";

export interface Props {
    appState: AppState;
}

class ChildComponent extends React.Component<Props, {}> {
    increment = () => {
        console.log("hello")
        this.props.appState.incrementCounter();
    };

    render() {
        return (
            <div>
                <button onClick={this.increment}>
                    click count(async): {this.props.appState.counter.count}
                </button>
            </div>
        )
    }
}

@observer
export class HelloComponent extends React.Component<Props, {}> {
    increment = () => {
        console.log("hello");
        this.props.appState.incrementCounter();
    };

    render() {
        this.props.appState.counter;//observableの変更を検知するのに必要っぽい。
        return (
            <div>
                <ChildComponent appState={this.props.appState}/>
            </div>
        )
    }
}