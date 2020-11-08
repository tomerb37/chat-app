import './ChatsList.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, selectUser } from '../actions';

const ChatsList = ({ users, userId, isSignedIn, selectedChatUserId, fetchUsers, selectUser}) => {
    useEffect(() => {
        if (isSignedIn) {
            fetchUsers();
        }
    }, [isSignedIn]);

    if (!isSignedIn) {
        return null;
    }

    if (users.length === 0) {
        return <div>Loading users...</div>;
    }

    const usersList = users.filter(user => user.userId !== userId).map(user => {
        const itemClasses = `item user-item ${user.userId === selectedChatUserId ? 'selected' : ''}`;
        return (
            <div key={user.userId} className={itemClasses} onClick={() => selectUser(user.userId)} >
                <i className="large user middle aligned icon"></i>
                <div className="content">
                    <div className="header">{user.nickname}</div>
                </div>
            </div>
        );
    });

    return <div className="ui middle aligned relaxed divided selection list">{usersList}</div>;
};

const mapStateToProps = state => {
    return { 
        users: state.chats.users,
        selectedChatUserId: state.chats.selectedUser,
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId
     };
};

export default connect(mapStateToProps, { fetchUsers, selectUser })(ChatsList);
