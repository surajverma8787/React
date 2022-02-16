import React from "react";
function App() {
    var [name, setName] = React.useState("");
    var [headingText, setHeadingText] = React.useState("");
    function handleChange(event) {
        name = event.target.value;
        setName(name);
    }
    function checkClick(event) {
        setHeadingText(name);
        event.preventDefault();//To prevent Page from Refresh
    }
    return (
        <div className="container">
            <h1>Hello {headingText}</h1>
            <form onSubmit={checkClick}>
                <input onChange={handleChange} type="text" placeholder="What's your name?" value={name} />
                <button onClick={checkClick}>Submit</button>
            </form>
        </div >
    );
}

export default App;
