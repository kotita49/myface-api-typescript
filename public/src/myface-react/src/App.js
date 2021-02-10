import logo from './logo.svg';
import './App.css';
import {PostsDisplay} from './posts.jsx';
import {User} from './user';
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <h1>My face - only for robots and their friends</h1>
    <Switch>
      <Route path="/posts">
      <div><PostsDisplay/></div>
      </Route>
      <Route exact={true} path="/users">
      <div><User/></div>
      </Route>
      <Route path="">
        <div>Sorry - that page does not exist, try these:</div>
        <Link to="/posts"></Link>
        <Link to="/users"></Link>
      </Route>
    </Switch>
    
    </Router>
  );
}

export default App;
