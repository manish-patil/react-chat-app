import * as React from "react";

export default class ChatBox extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.messageType === "NEW_CHAT_CREATED" ? "chatbox chatbox-right" : "chatbox chatbox-left"}>
                <div className="avatar">{this.props.userInitials}</div>
                <div className={this.props.messageType === "NEW_CHAT_CREATED" ? "bubble-right" : "bubble-left"}>
                    <div className="bubble">{this.props.chatMessage}</div>
                    <div className="chat-delivery">{this.props.chatMessageSentAt}</div>
                </div>
            </div>
        )
    }
}