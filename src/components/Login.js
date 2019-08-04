import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import {login} from '../actions/login';
import {  Redirect } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: '',
            errors: {},
            isLoading: false
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { userName, password } = this.state;
        if (userName && password) {
            
        }
        this.props.login(userName, password);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        console.log(this.props)
        if(this.props.loggingIn) {
            return <Redirect to={'/profile'}/>;
        }
            
        return (
            <div>
                <h1>Login</h1>
                { this.props.errorMsg && <p>{this.props.errorMsg}</p> }
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        label="Name"
                        value={this.state.userName}
                        onChange={this.handleChange}
                        margin="normal"
                        name="userName"
                    />
                    <TextField
                        label="Password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        margin="normal"
                        name="password"
                    />
                    <Button type="submit" variant="outlined" color="primary">
                        Primary
                    </Button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    const loggingIn = state.authentication.loggedIn;
    const errorMsg = state.authentication.message
    return { loggingIn, errorMsg };
}

const actionCreators = {
    login: login
};

export default connect(mapStateToProps, actionCreators)(Login)