import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from "react-router-dom";

import Socket from "./socket";
// import Socket from "./socket";
// import { connect } from "./socket";
import { store } from "./store";
// import App from "./components/App";
import Home from "./components/Home";
// import Hello from "./components/Hello";
import "./styles.css";

export var socket = new Socket();
socket.connect();
// socket.sendNewMessage("Hello from client!");

// ReactDOM.render(<Provider store={store}>
//     <App className="container" />
// </Provider>,
//     document.getElementById("main")
// );

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    </Provider>,
    document.getElementById("main")
);