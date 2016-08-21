import {observable} from 'mobx';
import {Promise} from "es6-promise";

export class AppState {
    @observable counter = 0;

    constructor() {}

    incrementCounter(): Promise<any> {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve();
            }, 100);
        }).then(() => this.counter += 1)
    }
}