import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import newChatCreated from "../actions/newChatCreated";
import ChatBox from "./ChatBox";

class MessagePanel extends React.Component<any, any> {
    private txtChat;

    constructor(props: any) {
        super(props);

        this.txtChat = React.createRef();

        this.sendNewChat = this.sendNewChat.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onKeyDown(e) {
        if ((e.which == '13') && (e.ctrlKey || e.metaKey)) {
            this.sendNewChat(e);
            e.preventDefault();
        }
    }

    sendNewChat(e) {
        e.preventDefault();

        if (this.txtChat.current.value.trim().length > 0) {
            let chatPayload = {
                // messageType: "NEW_CHAT_CREATED",
                user: this.props.user,
                chatMessage: this.txtChat.current.value.trim(),
                chatMessageSentAt: new Date(),
                chatMessageDelivered: false,
            };

            this.props.newChatCreated(chatPayload);

            this.txtChat.current.value = '';
            this.txtChat.current.focus();
        } else {
            this.txtChat.current.focus();
        }
    }

    render() {
        return (
            <div className="appPanelOld">
                <div className="messagesPanel">
                    <div>
                        {
                            this.props.chats && this.props.chats.length > 0 &&
                            this.props.chats.map((chat, idx) => {
                                return <ChatBox key={"_" + idx} userInitials={chat.user.initials}
                                    messageType={chat.messageType}
                                    chatMessage={chat.chatMessage}
                                    chatMessageSentAt={chat.chatMessageSentAt.toLocaleString()} />
                            })
                        }
                    </div>
                </div>
                <div className="messagePanel">
                    <div className="row">
                        <label>Message</label>
                        <textarea ref={this.txtChat} onKeyDown={this.onKeyDown} rows={5} name="Text1" id="message"></textarea>
                    </div>
                    <div style={{ justifyContent: 'flex-end' }} className="row">
                        <button onClick={this.sendNewChat}>Send</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        chats: state.chatState.chats,
        user: state.userState.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newChatCreated: (message) => dispatch(newChatCreated(message))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessagePanel));