import React from "react";

function App() {
    var [fullName, setFullName] = React.useState({
        fName: "",
        lName: ""
    });
    function updateName(event) {
        const name = event.target.name;
        const newValue = event.target.value;
        setFullName(prevValue => {
            if (name == "fName") {
                return {
                    fName: newValue,
                    lName: prevValue.lName
                }
            }
            else {
                return {
                    fName: prevValue.fName,
                    lName: newValue
                }

            }
        })
    }
    return (
        <div className="container">
            <h1>Hello {fullName.fName} {fullName.lName}</h1>
            <form>
                <input name="fName" onChange={updateName} placeholder="First Name" />
                <input name="lName" onChange={updateName} placeholder="Last Name" />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;
