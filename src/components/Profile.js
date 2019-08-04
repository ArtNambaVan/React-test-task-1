import React from 'react'
import { connect } from 'react-redux'
import { logOut } from '../actions/login';

class Profile extends React.Component {

    logOut = (e) => {
        console.log(this.props)
        this.props.logOut();
    };
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <h1>Profile { this.props.user && <span>{this.props.user}</span> }</h1>
                <button onClick={this.logOut}>Log out</button>
            </React.Fragment>
            
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    const loggingIn = state.authentication.loggedIn;
    const user = state.authentication.user
    return { user, loggingIn }
}

const actionCreators = {
    logOut: logOut
};


export default connect(mapStateToProps, actionCreators)(Profile)