import {decrementAction, incrementAction} from "./ActionCreators";

export interface GlobalState {
    num: number;
}

export interface MyAction {
    type: string;
    amount?: number;
}

export class DispatchActions {
    private dispatch: (action: any) => any;
    constructor(dispatch: (action: any) => any){
        this.dispatch = dispatch
    }

    public increment(amount: number) {
        this.dispatch(incrementAction(amount))
    }

    public decrement(amount: number) {
        this.dispatch(decrementAction(amount))
    }
}

export class ActionTypes{
    static INCREMENT = 'INCREMENT';
    static DECREMENT = 'DECREMENT';
}