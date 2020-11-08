import React from 'react';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <div className="item">Chat-App</div>
            <div className="right menu">
                <GoogleAuth className="item" />
            </div>
        </div>
    );
};

export default Header;
