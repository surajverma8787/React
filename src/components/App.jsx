import React from "react";
import ToDoItem from "./ToDoItem";

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
    function deleteItem(id) {
        setItems(prevItems => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });
        });

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
                    {items.map((item, index) => <ToDoItem
                        key={index}
                        id={index}
                        text={item}
                        onChecked={deleteItem}
                    />)}
                </ul>
            </div>
        </div>
    );
}

export default App;
