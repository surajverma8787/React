import React from "react";
function ToDoItem(props) {
    const [val, setVal] = React.useState(false);
    function handleClick() {
        setVal(prevValue => {
            return !prevValue;
        });
    }
    return <div onClick={() => { props.onChecked(props.id) }}>
        <li style={{ textDecoration: val == true ? "line-through" : "none" }}>{props.text}</li>
    </div >
}
export default ToDoItem;