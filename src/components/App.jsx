import React from "react";
import emojipedia from "../emojipedia.js";
import Card from "./Card.jsx";
function createEmoji(emojipedia) {
    return <Card
        emoji={emojipedia.emoji}
        name={emojipedia.name}
        meaning={emojipedia.meaning}
    />
}
function App() {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>
            <dl className="dictionary">
                {emojipedia.map(createEmoji)};
            </dl>
        </div>
    );
}

export default App;
