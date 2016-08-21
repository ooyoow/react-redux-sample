import * as React from "react";
import {assert} from "chai";
import {spy} from "sinon";
import * as TestUtils from "react-addons-test-utils";
import * as ReactDOM from "react-dom";
import {AppState} from "../AppState";
import {HelloComponent} from "../Hello";
import objectAssign = require('object-assign');

describe('HelloComponent', () => {

    it('rendering', () => {
        const appState: AppState = new AppState();
        const counterComponent: any = TestUtils.renderIntoDocument(
            <HelloComponent appState={appState} />
        );

        const counterDOM = ReactDOM.findDOMNode(counterComponent);
        const buttons: NodeListOf<HTMLButtonElement> = counterDOM.getElementsByTagName("button");

        const button: HTMLButtonElement = buttons[0];
        assert.deepEqual(button.textContent, "click count(async): 0");
    });

    it('clickAction', () => {
        const spyCB:any = spy();
        const appState: AppState = new AppState();
        const newOne = objectAssign({}, appState, {incrementCounter: spyCB});
        const counterComponent: any = TestUtils.renderIntoDocument(
            <HelloComponent appState={newOne} />
        );

        const counterDOM = ReactDOM.findDOMNode(counterComponent);
        const buttons: NodeListOf<HTMLButtonElement> = counterDOM.getElementsByTagName("button");

        const button: HTMLButtonElement = buttons[0];
        assert.deepEqual(button.textContent, "click count(async): 0");

        TestUtils.Simulate.click(button);
        assert.deepEqual(spyCB.calledOnce, true);
    });
});