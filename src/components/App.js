import React from 'react';
import { connect } from 'react-redux';
import Conversation from './Conversation';
import Header from './Header';
import ChatsList from './ChatsList';

const App = ({ isSignedIn }) => {
    const renderBody = () => {
        if (!isSignedIn) {
            return (
                <div className="ui centered grid">
                    <div className="row">
                        <i className="chat-icon circular massive comment outline icon"></i>
                    </div>
                </div>
            );
        }

        return (
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
        );
    };

    return (
        <div className="ui container">
            <Header />
            {renderBody()}
        </div>
        );
};

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps)(App);
