import * as React from "react";
// import * as io from "socket.io-client";
import { connect } from "react-redux";

import ChatPanel from "./ChatPanel";

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        console.log("App render()" + this.props.messages);

        return (
            <div className="appPanel">
                <div className="messagesPanel">
                    <h3>Messages - {this.props.messages.length}</h3>
                    <ul>
                        {
                            this.props.messages && this.props.messages.length > 0 &&
                            this.props.messages.map((message, idx) => {
                                return <li key={"_" + idx}>{message}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="messagePanel">
                    <ChatPanel />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messageState.messages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // newUser: (user) => dispatch(newUser(user));
        // newMessage: (message) => dispatch(newMessage(message))

        // newMessage: function (message) {
        //     var innerFunctionWithDispatch = newMessage(message);
        //     innerFunctionWithDispatch(dispatch);
        //     // dispatch1();
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);