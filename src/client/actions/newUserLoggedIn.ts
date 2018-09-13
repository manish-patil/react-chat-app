export default function newUserLoggedIn(user) {
    return (
        function (dispatch) {
            dispatch({
                type: "NEW_USER_CONNECTED",
                payload: user
            })
        }
    )
}

// NEW_USER_CONNECTED
// 	NEW_USER_RECEIVED  - Event received to Client - Update Store