import React from "react";
import Heading from "./Heading.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import Images from "./Images.jsx";
import contacts from "../contacts.js";
function App() {
    return <div>
        <h1 className="heading">My Contacts</h1>
        <Images
            name={contacts[0].name}
            image={contacts[0].image}
            mobile={contacts[0].mobile}
            email={contacts[0].email}
        />
        <Images
            name={contacts[1].name}
            image={contacts[1].image}
            mobile={contacts[1].mobile}
            email={contacts[1].email}
        />
        <Images
            name={contacts[2].name}
            image={contacts[2].image}
            mobile={contacts[2].mobile}
            email={contacts[2].email}
        />
    </div>

}
export default App;