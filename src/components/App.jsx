import React from "react";
function App() {
    const [headingText, setHeadingText] = React.useState("Hello");
    var [isMouseOver, setMouseOver] = React.useState(false);
    function handleClick() {
        setHeadingText("Submitted");
    }
    function onMouse() {
        isMouseOver = true;
        setMouseOver(isMouseOver);
    }
    function outMouse() {
        isMouseOver = false;
        setMouseOver(isMouseOver);
    }
    return (
        <div className="container">
            <h1>{headingText}</h1>
            <input type="text" placeholder="What's your name?" />
            <button style={{ backgroundColor: isMouseOver ? "black" : "white" }}
                onClick={handleClick}
                onMouseOver={onMouse}
                onMouseOut={outMouse} >Submit</button>
        </div >
    );
}

export default App;
