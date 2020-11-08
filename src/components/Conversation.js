import React from 'react';
import { connect } from 'react-redux';
import MessagesList from './MessagesList';
import MessageInput from './MessageInput';

const Conversation = ({ isSignedIn, selectedUser }) => {
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
            <div className="ui segment">
                <MessagesList />
            </div>
            <div className="ui segment">
                <MessageInput />
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return { 
        isSignedIn: state.auth.isSignedIn,
        selectedUser: state.chats.selectedUser
     };
};

export default connect(mapStateToProps)(Conversation);
