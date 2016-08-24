import * as React from "react";
import {LoadingCountClass} from "./CounterState";

interface Props {
    loadingCount: LoadingCountClass
}

export const CounterChild = (props: Props) => {
    const loading = (props.loadingCount.loadingCount === 0) ? <p></p> : <p>loading</p>;
    return (
        <div>
            {loading}
        </div>
    )
};