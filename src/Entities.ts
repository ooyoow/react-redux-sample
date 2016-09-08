export interface GlobalState {
    num: number;
}

export interface MyAction {
    type: string;
    amount?: number;
}

export class ActionTypes{
    static INCREMENT = 'INCREMENT';
    static DECREMENT = 'DECREMENT';
}
