import React from "react";
import ReactDOM from "react-dom";
const date = new Date();
const time = date.getHours();
let text = "";
const customStyle = {
    color: "red"
}
if (time < 12) {
    text = text + "Good Moring";
    customStyle.color = "blue";
}
else if (time < 18) {
    text = text + "Good Afternoon";
    customStyle.color = "yellow";
}
else {
    text = text + "Good Evening";
    customStyle.color = "black";
}
ReactDOM.render(
    <div style={customStyle}>
        <h1>{text}</h1>
    </div>
    , document.getElementById("root"));