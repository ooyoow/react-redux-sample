import * as React from "react";
import * as ReactDOM from "react-dom";
import {getRequest} from "./utils/HttpClient";

function login(){
    location.href = "/";
}

function failCB():void {
    ReactDOM.render(
        <button onClick={() => login()}>login</button>,
        document.getElementById('app')
    );
}

function successCB(val: any):void {
    alert("login済みです。ホームへ移動します。");
    login()
}

getRequest<any>("authCheck", successCB, failCB);