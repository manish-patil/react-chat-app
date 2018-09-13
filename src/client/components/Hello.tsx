import * as React from "react";

// import * as Socket from "../socket";
// import Socket from "../socket";

export default class Hello extends React.Component<any, any>{
    constructor(props) {
        super(props);

        console.log("Hello Constructor", "START");
        // var socket = new Socket();
        // socket.connect();
        console.log("Hello Constructor", "END");
    }

    render() {
        return (
            <div>
                Hello World!!!
            </div>
        )
    }
}