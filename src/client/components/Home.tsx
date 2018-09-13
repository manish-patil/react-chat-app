import * as React from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./Login";
import ChatPanel from "./ChatPanel";
import Hello from "./Hello";

class Home extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            // <div style={{ border: "1px solid black", flex: "1", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "stretch" }}>
            // <div style={{ border: "1px solid black", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div className="appPanel">
                <Route exact path="/" component={Login}></Route>
                <Route exact path="/chat" component={ChatPanel}></Route>
                {/* <Route exact path="/chat" component={Hello}></Route> */}
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {}
}

// export default withRouter(connect(mapStateToProps)(Home));
// export default connect(mapStateToProps)(Home);
export default Home;