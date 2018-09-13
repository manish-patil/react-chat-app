import * as socketIO from "socket.io-client";

import newMessage from "./actions/newChatCreated";
import { store } from "./store";

export default class Socket {
    private socket;

    public connect() {
        this.socket = socketIO("ws://localhost:3000");

        this.socket.on("NEW_CHAT_RECEIVED", function (message) {
            store.dispatch({
                type: "NEW_CHAT_RECEIVED",
                payload: message
            });
        });
    }

    public sendNewMessage(message) {
        // debugger;        
        this.socket.emit("NEW_CHAT_CREATED", message);
    }
}