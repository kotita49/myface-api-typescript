import logo from './logo.svg';
import './App.scss';
import {PostsDisplay} from './posts.jsx';
import {User} from './user';
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useParams} from 'react-router-dom';
import {SingleUser} from './SingleUser.jsx';



function App() {
  return (
    <Router>
      <div className="mainBanner">
        <h1>My face - only for robots and their friends</h1>
      </div> 
    <Switch>
                <Route path="/posts">
                <h2>Posts</h2>
      <div className="App">
        <PostsDisplay/></div>
      </Route>
           <Route exact={true} path="/users">
      <div><h2>List of our users</h2>
        <User/></div>
      </Route>
      <Route path="/:userId">
      <div>
        <h2>User Details</h2><SingleUser/></div>
      </Route>
      <Route path="">
<div className="tile"><h2>Welcome to the main page!</h2>
        <div className="central" >
             <p> <Link to="/posts">Posts</Link></p>
        <p> <Link to="/users">Users</Link></p>
        </div>
        </div>
      </Route>
     
    </Switch>
    
    </Router>
  );
}


export default App;
