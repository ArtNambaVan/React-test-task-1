import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import News from './components/News'
import Login from './components/Login'
import Profile from './components/Profile'
import Notfound from './components/Notfound'
import Layout from './components/Layout/index'

import './styles/App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" render={() => <div>Home</div>} />
                        <Route exact path="/news" component={News} />
                        <Route path="/login" component={Login} />
                        <Route path="/profile" component={Profile} />
                        <Route component={Notfound} />
                    </Switch> 
                </Layout>
            </Router>
        )
    }
}
export default App