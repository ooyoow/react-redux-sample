import {Dispatch} from "redux";

export interface GlobalState {
  num: number;
}

interface MyAction {
  type: string;
  amount?: number;
}

class ActionTypes{
  static INCREMENT = 'INCREMENT';
  static DECREMENT = 'DECREMENT';
}

const initialState:GlobalState = {num: 0};

export function counter(state: GlobalState = initialState, action: MyAction): GlobalState {
  //console.log(action.type); //check which action has occurred;
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {num: state.num + action.amount};
    case ActionTypes.DECREMENT:
      return {num: state.num - action.amount};
    default:
      return state
  }
}

export function increment(dispatch: Dispatch<any>, amount: number) {
  dispatch({ type: ActionTypes.INCREMENT, amount: amount})
}

export function decrement(dispatch: Dispatch<any>, amount: number) {
  dispatch({ type: ActionTypes.DECREMENT, amount: amount})
}