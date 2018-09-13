import * as io from "socket.io-client";

function Socket() {
    let socket;

    function connect() {
        console.log("scoske", socket);

        socket = io("ws://localhost:3000");

        socket.on("connected", () => {
            console.log("User Connected to server.")
        })
    }

    function sendMessageToServer() {

    }

    return {
        connect: connect,
        sendMessageToServer
    }
}

export default Socket;