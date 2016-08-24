import {observable, action} from "mobx";
import {JsonObject} from "./Models";
const objectAssign = require("object-assign");
import * as axios from "axios";

export class CounterState {
    count: number;
    loadingCount: number;
    constructor(count:number, loadingCount: number){
        this.count = count;
        this.loadingCount = loadingCount;
    }
}

export class CounterStateParent {
    @observable counter: CounterState;

    constructor() {
        this.counter = new CounterState(0, 0)
    }

    @action
    increment(n: number): void {
        const newState:CounterState = objectAssign({}, this.counter);
        newState.count = this.counter.count + n;
        this.counter = newState
    }

    decrement(n: number): void {
        const newState:CounterState = objectAssign({}, this.counter);
        newState.count = this.counter.count - n;
        this.counter = newState
    }

    fetchAmount(): Promise<any> {

        const failCB = (ex:Error) => {
            const newState:CounterState = objectAssign({}, this.counter);
            newState.count = this.counter.count + 1;
            newState.loadingCount = this.counter.loadingCount - 1;
            this.counter = newState
        };

        const successCB = (json:Axios.AxiosXHR<JsonObject>) => {
            const newState:CounterState = objectAssign({}, this.counter);
            newState.count = this.counter.count + json.data.amount;
            newState.loadingCount = this.counter.loadingCount - 1;
            this.counter = newState
        };

        const newState:CounterState = objectAssign({}, this.counter);
        newState.loadingCount = this.counter.loadingCount + 1;
        this.counter = newState;
        return axios.get('/api/count')
            .then(successCB)
            .catch(failCB)
    }
}