import {observable, action} from 'mobx';
import {Promise} from "es6-promise";
const objectAssign = require("object-assign");

export class ChildState {
    count: number;
    constructor(n:number){
        this.count = n
    }
}

export class AppState {
    @observable counter: ChildState;

    constructor() {
        this.counter = new ChildState(0)
    }

    @action
    incrementCounter(): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 100);
        }).then(() => {
            const newState:ChildState = objectAssign({}, this.counter);
            newState.count = this.counter.count + 1;
            this.counter = newState
        })
    }
}