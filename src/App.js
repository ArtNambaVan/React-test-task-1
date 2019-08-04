import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import News from './components/News'
import Login from './components/Login'
import Profile from './components/Profile'
import Notfound from './components/Notfound'
import PrivateRoute from './components/PrivateRoute'
import Layout from './components/Layout/index'
import { connect } from 'react-redux'

import './styles/App.css';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//     return (
//       <Route
//         {...rest}
//         render={props =>
//           rest.loggingIn ? (
//             <Component {...props} />
//           ) : (
//             <Redirect
//               to={{
//                 pathname: '/login',
//                 state: { from: props.location },
//               }}
//             />
//           )
//         }
//       />
//     )
//   }

class App extends Component {
    render() {
        console.log(this.props.loggingIn)
        return (
            
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" render={() => <div>Home</div>} />
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

const mapStateToProps = state => {
    console.log(state)
    return {
        loggingIn: state.authentication.loggedIn
    }
  }
    
export default App