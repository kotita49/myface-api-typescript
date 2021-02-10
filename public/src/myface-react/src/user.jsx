import React, { useState, useEffect } from 'react';
import {UserDetails} from './UserDetails';

function User(){
    const [user, setUser] = useState(null);
    useEffect(() => {
        fetch('http://localhost:3001/users').then(response => response.json()).then(data =>{console.log(data);
        setUser(data)})
    }, []);
        if (!user) {
        return <div>Waiting for user data!</div>
    }    return user.results.map((items) =>
          <div> <UserDetails name={items.name} profileImage={items.profileImageUrl} username={items.username} email={items.email}  coverImage={items.coverImageUrl}  /></div>)

}
export {User}