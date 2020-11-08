import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createMessage } from '../actions';

const MessageInput = props => {
    const [messageContent, setMessageContent] = useState('');

    const onInputSubmit = async event => {
        event.preventDefault();

        if (messageContent === '') {
            return;
        }
        
        setMessageContent('');
        props.createMessage(messageContent);
    };

    return (
        <form className="ui form" onSubmit={onInputSubmit}>
            <div className="ui fluid icon input">
                <input 
                type="text" 
                value={messageContent} 
                onChange={e => setMessageContent(e.target.value)}
                placeholder="Type a message..." />
                <i className="paper plane icon" />
            </div>
        </form>
    );
};

export default connect(null, { createMessage })(MessageInput);
