import { socket } from "..";

export default function messageReducer(state = { chats: [] }, action) {
    console.log("messageReducer", state);

    if (action.type === "NEW_CHAT_CREATED") {
        socket.sendNewMessage(action.payload);

        action.payload.messageType = "NEW_CHAT_CREATED";

        return {
            ...state,
            chats: [...state.chats, action.payload]
        }
    } else if (action.type === "NEW_CHAT_RECEIVED") {
        action.payload.messageType = "NEW_CHAT_RECEIVED";

        return {
            ...state,
            chats: [...state.chats, action.payload]
        }
    } else {
        return state;
    }
}