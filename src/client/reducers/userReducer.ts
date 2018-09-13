export default function userReducer(state = { user: {} }, action) {
    if (action.type === "NEW_USER_CONNECTED") {
        let initials = action.payload.firstName.substring(0, 1).toUpperCase() + action.payload.lastName.substring(0, 1).toUpperCase();

        state = { user: action.payload };
        state.user = {...state.user, initials: initials };

        return state;
    } else {
        return state
    }
}