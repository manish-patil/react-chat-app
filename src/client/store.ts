import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import chatReducer from "./reducers/chatReducer";
import userReducer from "./reducers/userReducer";

const reducers = combineReducers({
    chatState: chatReducer,
    userState: userReducer
});

const middleware = applyMiddleware(logger, thunk);

export const store = createStore(reducers, middleware);


// NEW_CHAT_CREATED - Client to Server -> Broadcast to all clients
// 	NEW_CHAT_RECEIVED - Event received to Client - Update Store
// USER_TYPING - Client to Server - Broadcast to all clients
// 	USER_TYPING_RECEIVED - Event received to Client - Update Store


// NEW_USER_CONNECTED
// 	NEW_USER_RECEIVED  - Event received to Client - Update Store
// USER_DISCONNECTED - This may not be triggerd by Client!
// 	USER_DISCONNECTED_RECEIVED - Event received to Client - Update Store