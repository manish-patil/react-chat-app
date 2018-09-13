import * as React from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux"

import newUserLoggedIn from "../actions/newUserLoggedIn";

class Login extends React.Component<any, any>{
    private txtFirstName;
    private txtLastName;

    constructor(props: any) {
        super(props);

        this.txtFirstName = React.createRef();
        this.txtLastName = React.createRef();

        this.login = this.login.bind(this);

        this.state = { toChat: false };
    }

    login(e) {
        e.preventDefault();

        let firstName = this.txtFirstName.current.value.trim();
        let lastName = this.txtLastName.current.value.trim();

        if (firstName.length > 0) {
            if (lastName.length > 0) {
                this.props.login({ firstName: firstName, lastName: lastName })
                this.setState({ toChat: true });
            } else {
                this.txtLastName.current.focus();
            }
        } else {
            this.txtFirstName.current.focus();
        }
    }

    render() {
        if (this.state.toChat === true) {
            return <Redirect to='/chat' />
        }

        return (
            <div className="loginPanel">
                <div style={{ padding: ".5em" }}>
                    <input type="text" ref={this.txtFirstName} placeholder="Enter First Name" className="input-text" />
                </div>
                <div style={{ padding: ".5em" }}>
                    <input type="text" ref={this.txtLastName} placeholder="Enter Last Name" className="input-text" />
                </div>
                <div style={{ padding: ".5em" }}>
                    <button onClick={this.login} className="login-button">Login</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    // return {
    //     login: (user) => dispatch(newUserLoggedIn(user))
    // }

    return {
        login: function (user) {
            var innerFunctionWithDispatch = newUserLoggedIn(user);
            innerFunctionWithDispatch(dispatch);
        }
    }
}

// export default withRouter(Login);
export default connect(mapStateToProps, mapDispatchToProps)(Login);