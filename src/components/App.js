import React from 'react';
import Conversation from './Conversation';
import Header from './Header';
import ChatsList from './ChatsList';

const App = () => {
    return (
        <div className="ui container">
            <Header />
            <div className="ui grid">
                <div className="ui row">
                    <div className="three wide column">
                        <div className="ui segment">
                            <ChatsList />
                        </div>
                    </div>
                    <div className="thirteen wide column">
                        <div className="ui segment">
                            <Conversation />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
};

export default App;
