import {observable, action} from "mobx";
import {JsonObject} from "./Models";
const objectAssign = require("object-assign");
import * as axios from "axios";

export class CountClass {
    count: number;
    constructor(count: number){
        this.count = count;
    }
}

export class LoadingCountClass {
    loadingCount: number;
    constructor(loadingCount: number){
        this.loadingCount = loadingCount;
    }
}

export class CounterState {
    @observable count: CountClass;

    @observable loadingCount: LoadingCountClass;

    constructor() {
        this.count = new CountClass(0);
        this.loadingCount = new LoadingCountClass(0);
    }

    @action
    increment(n: number): void {
        const newCount:CountClass = objectAssign({}, this.count);
        newCount.count = this.count.count + n;
        this.count = newCount
    }

    decrement(n: number): void {
        const newCount:CountClass = objectAssign({}, this.count);
        newCount.count = this.count.count - n;
        this.count = newCount
    }

    fetchAmount(): Promise<any> {

        const failCB = (ex:Error) => {
            const newLoadingCount:LoadingCountClass = objectAssign({}, this.loadingCount);
            newLoadingCount.loadingCount = this.loadingCount.loadingCount - 1;
            this.loadingCount = newLoadingCount;
        };

        const successCB = (json:Axios.AxiosXHR<JsonObject>) => {
            const newLoadingCount:LoadingCountClass = objectAssign({}, this.loadingCount);
            newLoadingCount.loadingCount = this.loadingCount.loadingCount - 1;
            this.loadingCount = newLoadingCount;

            const newCount:CountClass = objectAssign({}, this.count);
            newCount.count = this.count.count + json.data.amount;
            this.count = newCount
        };

        const newLoadingCount:LoadingCountClass = objectAssign({}, this.loadingCount);
        newLoadingCount.loadingCount = this.loadingCount.loadingCount + 1;
        this.loadingCount = newLoadingCount;

        return axios.get('/api/count')
            .then(successCB)
            .catch(failCB)
    }
}