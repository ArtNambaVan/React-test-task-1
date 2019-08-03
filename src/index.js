
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import App from "./App";

const Routing = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}


ReactDOM.render(<Routing />, document.getElementById("root"));