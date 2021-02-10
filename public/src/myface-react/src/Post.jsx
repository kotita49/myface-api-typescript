import React from "react"; 

function Post(props){
   return <div>
        <img src={props.imageUrl}/>
       <div> Created by: {props.user}</div>
        <div>On: {props.date}</div>
        <div>{props.post}</div>
    </div>

}

export {Post}