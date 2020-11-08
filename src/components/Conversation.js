import './Conversation.css';
import React, { useRef } from 'react';
import { connect } from 'react-redux';
import MessagesList from './MessagesList';
import MessageInput from './MessageInput';

const Conversation = ({ isSignedIn, messagesCount, selectedUser }) => {
    const listRef = useRef(null);

    if (isSignedIn === null) {
        return null;
    }

    if (!isSignedIn) {
        return <div>Please sign in</div>;
    }

    if (selectedUser === null) {
        return <div>Please select a chat.</div>;
    }

    return (
        <div>
            <div ref={listRef}className="ui segment chat-messages">
                <MessagesList scroll={listRef} />
            </div>
            <div className="ui segment chat-input">
                <MessageInput />
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return { 
        isSignedIn: state.auth.isSignedIn,
        selectedUser: state.chats.selectedUser,
        messagesCount: state.messages.length
     };
};

export default connect(mapStateToProps)(Conversation);
