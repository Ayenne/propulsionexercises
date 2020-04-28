import React from 'react';
import Login from './components/Login.js';
import Feed from './components/feed/Feed';
import FindFriends from './components/find_friends/FindFriends';
import MyProfile from './components/myProfile/MyProfile.js';
import { withAuth, withoutAuth } from './HOC/withAuth.js'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact={ true } path="/login" component={ withoutAuth(Login) } />
          <Route exact={ true } path="/" component={ withAuth(Feed) } />
          <Route exact={ true } path="/findfriends" component={ withAuth(FindFriends) } />
          <Route exact={ true } path="/myprofile" component={ withAuth(MyProfile) } />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
