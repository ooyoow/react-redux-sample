import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, browserHistory} from "react-router";
import Root from "./Root";
import NotFound from "./NotFound";
import {CounterRoot} from "./counter/Root";
import {Paths} from "./Models";

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={Root} >
            <Route path={Paths.COUNTER} component={CounterRoot} />
            <Route path="*" component={NotFound} />
        </Route>
    </Router>,
    document.getElementById('app')
);
