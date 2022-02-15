import React from "react";
function App() {
    setInterval(checkTime, 1000);
    var t = new Date().toLocaleTimeString();
    const [time, setTime] = React.useState(t);
    function checkTime() {
        t = new Date().toLocaleTimeString();
        setTime(t);
    }
    return (
        <div className="container">
            <h1>{time}</h1>
            <button onClick={checkTime}>Get Time</button>
        </div>
    );
}

export default App;
