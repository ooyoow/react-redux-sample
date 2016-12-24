import {Dispatch} from "redux";

export interface CounterState {
  num: number;
}

interface MyAction {
  type: string;
  amount?: number;
}

const INCREMENT = 'counter/increment';
const DECREMENT = 'counter/decrement';

const initialState:CounterState = {num: 0};

export default function reducer(state: CounterState = initialState, action: MyAction): CounterState {
  switch (action.type) {
    case INCREMENT:
      return {num: state.num + action.amount};
    case DECREMENT:
      return {num: state.num - action.amount};
    default:
      return state
  }
}

export function increment(dispatch: Dispatch<any>, amount: number) {
  dispatch({ type: INCREMENT, amount: amount})
}

export function decrement(dispatch: Dispatch<any>, amount: number) {
  dispatch({ type: DECREMENT, amount: amount})
}