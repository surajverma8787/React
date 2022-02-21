import React, { useState } from "react";

function App() {
    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: ""
    });
    function updateContact(event) {
        const changeName = event.target.name;
        const newValue = event.target.value;
        setContact(prevValue => {
            if (changeName === 'fName') {
                return {
                    ...prevValue,
                    fName: newValue,
                };

            }
            else if (changeName === 'lName') {
                return {
                    ...prevValue,
                    lName: newValue,
                };
            }
            else {
                return {
                    ...prevValue,
                    email: newValue

                };

            }

        });

    }

    return (
        <div className="container">
            <h1>
                Hello {contact.fName} {contact.lName}
            </h1>
            <p>{contact.email}</p>
            <form>
                <input name="fName" onChange={updateContact} placeholder="First Name" />
                <input name="lName" onChange={updateContact} placeholder="Last Name" />
                <input name="email" onChange={updateContact} placeholder="Email" />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;
