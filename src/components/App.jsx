import React from "react";
import emojipedia from "../emojipedia.js";
import Card from "./Card.jsx";
function App() {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>
            <dl className="dictionary">
                {emojipedia.map((emojipedia) =>
                    <Card
                        emoji={emojipedia.emoji} name={emojipedia.name} meaning={emojipedia.meaning}
                    />
                )};
            </dl>
        </div>
    );
}

export default App;
