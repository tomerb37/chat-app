import { SIGN_IN, SIGN_OUT } from '../actions/types';

const DEFAULT_AUTH = {
    isSignedIn: null,
    userId: null,
    nickname: null,
    access_token: null
};

const authReducer = (state = DEFAULT_AUTH, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                isSignedIn: true,
                userId: action.payload.userId,
                nickname: action.payload.nickname,
                access_token: action.payload.access_token
            };
        case SIGN_OUT:
            return {
                isSignedIn: false,
                userId: null,
                nickname: null,
                access_token: null
            };
        default:
            return state;
    }
};

export default authReducer;
