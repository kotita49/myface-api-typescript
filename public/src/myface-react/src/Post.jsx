import React from "react"; 
import './App.scss';
import {BrowserRouter as Router, Switch, Route, Link, useParams} from 'react-router-dom';
import {User} from './user.jsx'

function Post(props){
   return <div className="post">
        <img src={props.imageUrl}/>
       <div className="white"> Created by: <Link to={`/${props.userId}`}>  {props.user} </Link>
        <p>On: {props.date}</p>
        <p>{props.post}</p>
        </div>
    </div>
    

}

export {Post}