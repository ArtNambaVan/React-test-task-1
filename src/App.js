import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import News from './components/News'
import Login from './components/Login'
import Profile from './components/Profile'
import Notfound from './components/Notfound'
import PrivateRoute from './components/PrivateRoute'
import Layout from './components/Layout/index'
import Typography from '@material-ui/core/Typography';
import './styles/App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" render={() => <Typography component="h2" variant="h5" align="center">Home</Typography>} />
                        <Route exact path="/news" component={News} />
                        <Route path="/login" component={Login} />
                        <PrivateRoute path="/profile" component={Profile}/>
                        <Route component={Notfound} />
                    </Switch> 
                </Layout>
            </Router>
        )
    }
}
    
export default App