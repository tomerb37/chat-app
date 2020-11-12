import chat from '../apis/chat';
import { 
    FETCH_MESSAGES,
    CREATE_MESSAGE,
    SIGN_IN,
    SIGN_OUT,
    FETCH_USERS,
    SELECT_USER
} from './types';

export const fetchMessages = () => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const chatPeerUserId = getState().chats.selectedUser;
    const params = {
        senderId: userId,
        receiverId: chatPeerUserId
    };
    const response = await chat.get('/messages', {params});
    

    dispatch({ type: FETCH_MESSAGES, payload: response.data });
};

export const createMessage = messageContent => async (dispatch, getState) => {
    const receiverId = getState().chats.selectedUser;
    const access_token = getState().auth.access_token;
    
    const message = { 
        receiverId: receiverId,
        content: messageContent
    };

    const response = await chat.post('/messages', message, {
        headers: {
            'Authorization': `Bearer ${access_token}`,
            'Content-Type': 'application/json'
        }
    });

    dispatch({ type: CREATE_MESSAGE, payload: response.data });
};

export const changeAuth = isSignedIn => async dispatch => {
    if (isSignedIn) {
        const auth = window.gapi.auth2.getAuthInstance();
        const userId = auth.currentUser.get().getId();
        const nickname = auth.currentUser.get().getBasicProfile().getName();
        const response = await chat.post('/signin', {userId, nickname});
        
        const access_token = response.data.access_token;

        dispatch({ type: SIGN_IN, payload: { userId, nickname, access_token } });
    } else {
        dispatch({ type: SIGN_OUT });
    }
};

export const fetchUsers = () => async dispatch => {
    const response = await chat.get('/users');

    dispatch({ type: FETCH_USERS, payload: response.data });
};

export const selectUser = userId => {
    return { type: SELECT_USER, payload: userId };
};
