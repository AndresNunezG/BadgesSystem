import React from 'react';
var md5 = require('md5');

function Gravatar(props) {
    const hashEmail = md5(props.email);
    return (
        <img
            src={`https://www.gravatar.com/avatar/${hashEmail}?d=identicon`}
            alt="BadgeAvatar"
            className={props.className}
        />
    )
}

export default Gravatar;