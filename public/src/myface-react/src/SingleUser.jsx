import React, { useState, useEffect } from 'react';

import './App.scss';
import {useParams} from 'react-router-dom';

function SingleUser(){
    let {userId} = useParams();
    const [myUser, setMyUser] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:3001/users/${userId}`).then(response => response.json()).then(data =>{console.log(data);
        setMyUser(data)})
    }, []);
        if (!myUser) {
        return <div>Waiting for data!</div>
    }    return <div className="central">
        <img src={myUser.coverImageUrl}/>
        <div className="profile"><img src={myUser.profileImageUrl}/>
    <p>My name is {myUser.name} aka {myUser.username}</p>
    <p>{myUser.email}</p>
    </div>
</div> 

      
             
         
       
         
    
}
export {SingleUser}