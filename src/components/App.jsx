import React from "react";

function App() {
    const [inputText, setInputText] = React.useState("");
    const [items, setItems] = React.useState([]);
    function updateText(event) {
        const newText = event.target.value;
        setInputText(newText);
    }
    function addItems() {
        setItems(prevItems => {
            return [...prevItems, inputText];
        });
        setInputText("");
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input type="text" onChange={updateText} value={inputText} />
                <button onClick={addItems}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {items.map(item => <li>{item}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default App;
