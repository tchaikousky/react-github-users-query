import React from 'react';
import UserCard from './UserCard';

function UserCardList(props) {
    const { users } = props;

    const userComponent = users.map(user => <UserCard user={user} key={user.id}/>);
          
    return (
        <div>
            {userComponent}
        </div>
  
    )
}

export default UserCardList;