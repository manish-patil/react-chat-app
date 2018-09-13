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