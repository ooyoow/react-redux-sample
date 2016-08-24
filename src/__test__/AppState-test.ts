import {assert} from "chai";
import {AppState, ChildState} from "../AppState";

describe('AppState', () => {
    it('incrementCounter', () => {
        const appState: AppState = new AppState();
        assert.deepEqual(appState.counter, new ChildState(0));
        return appState.incrementCounter().then(() => {
            assert.deepEqual(appState.counter, new ChildState(1));
        });
    });
});