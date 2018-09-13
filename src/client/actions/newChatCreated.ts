// import Socket from "./../socket";
// import { socket } from "./../index";

export default function newChatCreated(chatPayload) {
    // return (dispatch) => {
    //     dispatch({
    //         type: "NEW_MESSAGE",
    //         payload: message
    //     })
    // }

    // socket.sendNewMessage(message);

    return (
        function (dispatch) {
            dispatch({
                type: "NEW_CHAT_CREATED",
                payload: chatPayload
            })
        }
    )
}