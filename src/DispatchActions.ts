import {ActionTypes} from "./Entities";

export class DispatchActions {
    private dispatch: (action: any) => any;
    constructor(dispatch: (action: any) => any){
        this.dispatch = dispatch
    }

    public increment(amount: number) {
        this.dispatch({ type: ActionTypes.INCREMENT, amount: amount})
    }

    public decrement(amount: number) {
        this.dispatch({ type: ActionTypes.DECREMENT, amount: amount})
    }
}