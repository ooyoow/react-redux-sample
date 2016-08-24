import {observable, action, IObservableValue} from "mobx";
import * as axios from "axios";
const objectAssign = require("object-assign");

export interface JsonObject {
    amount: number;
}

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
    count: IObservableValue<CountClass>;

    loadingCount: IObservableValue<LoadingCountClass>;

    constructor() {
        this.count = observable<CountClass>();
        this.count.set(new CountClass(0));

        this.loadingCount = observable<LoadingCountClass>();
        this.loadingCount.set(new LoadingCountClass(0));
    }

    increment(n: number): void {
        const newCount:CountClass = objectAssign({}, this.count);
        newCount.count = this.count.get().count + n;
        this.count.set(newCount)
    }

    decrement(n: number): void {
        const newCount:CountClass = objectAssign({}, this.count);
        newCount.count = this.count.get().count - n;
        this.count.set(newCount)
    }

    fetchAmount(): Promise<any> {

        const failCB = (ex:Error) => {
            const newLoadingCount:LoadingCountClass = objectAssign({}, this.loadingCount);
            newLoadingCount.loadingCount = this.loadingCount.get().loadingCount - 1;
            this.loadingCount.set(newLoadingCount);
        };

        const successCB = (json:Axios.AxiosXHR<JsonObject>) => {
            const newLoadingCount:LoadingCountClass = objectAssign({}, this.loadingCount);
            newLoadingCount.loadingCount = this.loadingCount.get().loadingCount - 1;
            // this.loadingCount.set(newLoadingCount);

            const newCount:CountClass = objectAssign({}, this.count);
            newCount.count = this.count.get().count + json.data.amount;
            // this.count.set(newCount);

            action(() => {
                this.loadingCount.set(newLoadingCount);
                this.count.set(newCount);
            })()
        };

        const newLoadingCount:LoadingCountClass = objectAssign({}, this.loadingCount);
        newLoadingCount.loadingCount = this.loadingCount.get().loadingCount + 1;
        this.loadingCount.set(newLoadingCount);

        return axios.get('/api/count')
            .then(successCB)
            .catch(failCB)
    }
}