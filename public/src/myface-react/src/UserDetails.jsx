import React from "react"; 

function UserDetails(props){
   return <div>
       <div>My name is {props.name} aka {props.username}</div>
              <p>My email {props.email}</p>
       <img src={props.profileImage}/>
     
        <img src={props.coverImage}/>
    
       
        <div>{props.email}</div>
    </div>

}

export {UserDetails}