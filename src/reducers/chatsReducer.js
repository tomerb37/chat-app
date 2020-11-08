import { FETCH_USERS, SELECT_USER, SIGN_OUT } from '../actions/types';

const DEFAULT_STATE = {
    users: [],
    selectedUser: null
};

const chatsReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                users: action.payload,
                selectedUser: null
            };
        case SELECT_USER:
            return { ...state, selectedUser: action.payload };
        case SIGN_OUT:
            return { ...state, selectedUser: null };
        default:
            return state;
    }
};

export default chatsReducer;
