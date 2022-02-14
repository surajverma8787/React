import React from "react";
import Login from "./Login.jsx";
var isLoggedin = true;
const obj = new Date();
const currDay = obj.getDay();
function App() {
    return (
        <div className="container">
            {
                isLoggedin === true ? <h1>Hello User</h1> : <Login />
            }
            {
                currDay === 7 && <h1>Lets Enjoy</h1>
            }

        </div>
    );
}

export default App;
