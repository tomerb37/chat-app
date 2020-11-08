import { FETCH_MESSAGES, CREATE_MESSAGE } from '../actions/types';

const messagesReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_MESSAGES:
            return action.payload;
        case CREATE_MESSAGE:
            return [ ...state, action.payload ];
        default:
            return state;
    }
};

export default messagesReducer;
