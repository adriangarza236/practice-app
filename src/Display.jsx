import React from "react";
import App from "./App";

function Display({ calc }) {
    return (
        <div>
            <p>Answer: {calc}</p>
        </div>
    )
}

export default Display;