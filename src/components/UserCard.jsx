import React from 'react';

function UserCard(props) {
    // const { user } = props;
    
    return (
        <div>
            <h2>{props.user.login}</h2>
            <img src = {props.user.avatar_url} alt=""/>
            <p>{props.user.public_repos}</p>
        </div>
    )
}

export default UserCard;