import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeAuth } from '../actions';

const GoogleAuth = props => {
    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '274421885660-c2tni1d70j1f6134vrru15ekbdd0jm2b.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                const auth = window.gapi.auth2.getAuthInstance();
                props.changeAuth(auth.isSignedIn.get());
                auth.isSignedIn.listen(props.changeAuth);
            });
        });
    }, []);

    if (props.isSignedIn === null) {
        return null;
    }
    
    const auth = window.gapi.auth2.getAuthInstance();

    if (props.isSignedIn) {
        return (
            <button onClick={auth.signOut} className="ui red google button">
                <i className="google icon" />
                Sign Out
            </button>
        );
    }

    return (
        <button onClick={auth.signIn} className="ui red google button">
            <i className="google icon" />
            Sign In with Google
        </button>
    );
};

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { changeAuth })(GoogleAuth);
