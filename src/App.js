import React, { Component } from "react";
import { Route, Switch, NavLink } from 'react-router-dom'
import News from './components/News'
import Login from './components/Login'
import Profile from './components/Profile'
import Notfound from './components/Notfound'

import './styles/App.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <NavLink exact activeClassName="active-link" to="/">News</NavLink>
                    <NavLink exact activeClassName="active-link" to="/login">Login</NavLink>
                    <NavLink exact activeClassName="active-link" to="/profile">Profile</NavLink>
                </nav>
                <Switch>
                    <Route exact path="/" component={News} />
                    <Route exact path="/login" component={Login} />
                    <Route path="/profile" component={Profile} />
                    <Route component={Notfound} />
                </Switch>
            </div>
        )
    }
}
export default App