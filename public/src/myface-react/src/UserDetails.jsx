import React from "react"; 
import {BrowserRouter as Router, Switch, Route, Link, useParams} from 'react-router-dom';

function UserDetails(props){
   return <div className="central">
       <p>{props.name} aka  <Link to={`/${props.userId}`}> {props.username} </Link></p>
        
       
    </div>

}

export {UserDetails}