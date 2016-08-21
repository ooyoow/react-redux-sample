import {observable, action} from 'mobx';
import {Promise} from "es6-promise";

export class AppState {
    @observable counter = 0;

    constructor() {}

    @action
    incrementCounter(): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 100);
        }).then(() => this.counter += 1)
    }
}