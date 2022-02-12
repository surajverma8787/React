import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
//import { add, multiply, subtract, divide } from "./calculator.jsx";
import * as Operations from "./calculator.jsx";
ReactDOM.render(
    <div>
        <li>
            {Operations.add(1, 2)}
        </li>
        <li>
            {Operations.multiply(1, 2)}
        </li>
        <li>
            {Operations.subtract(1, 2)}
        </li>
        <li>
            {Operations.divide(1, 2)}
        </li>
    </div>
    , document.getElementById("root"));