import './MessagesList.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';

const MessagesList = ({ messages, userId, selectedChatUserId, fetchMessages, scroll }) => {
    useEffect(() => {
        fetchMessages();
        const intervalHandler = setInterval(() => fetchMessages(), 2000);

        return function cleanUp() {
            clearInterval(intervalHandler);
        };
    }, [selectedChatUserId]);

    useEffect(() => {
        scroll.current.scrollTop = scroll.current.scrollHeight;
    }, [messages.length]);

    if (messages.length === 0) {
        return <div className="ui relaxed divided list">No messages.</div>;
    }

    const messagesList = messages.map(message => {
        const itemClasses = `item ${message.senderId === userId ? 'own-message' : ''}`;
        const contentClasses = `${message.senderId === userId ? 'right floated ' : ''} content`;
        const creationDate = new Date(message.creationDate);
        return (
            <div key={message.id} className={itemClasses}>
                <div className={contentClasses}>
                    <div className="header">{message.content}</div>
                    <div className="description">{creationDate.toLocaleString()}</div>
                </div>
            </div>
        )
    });

    return <div className="ui relaxed divided list">{messagesList}</div>;
};

const mapStateToProps = state => {
    return { 
        messages: state.messages,
        selectedChatUserId: state.chats.selectedUser,
        userId: state.auth.userId
     }
};

export default connect(mapStateToProps, { fetchMessages })(MessagesList);
