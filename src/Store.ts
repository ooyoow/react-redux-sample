import {counter} from "./Reducer";
import {createStore} from "redux";

const store = createStore(
    counter
);

export default store