import { combineReducers } from "redux";
import messagesReducer from './messagesReducer';
import authReducer from './authReducer';
import chatsReducer from './chatsReducer';

export default combineReducers({
    messages: messagesReducer,
    auth: authReducer,
    chats: chatsReducer
});
