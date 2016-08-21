import {assert} from "chai";
import {AppState} from "../AppState";

describe('AppState', () => {
    it('incrementCounter', () => {
        const appState: AppState = new AppState();
        assert.deepEqual(appState.counter, 0);
        return appState.incrementCounter().then(() => {
            assert.deepEqual(appState.counter, 1);
        });
    });
});