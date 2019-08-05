import React from 'react'
import {  Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import {login} from '../actions/login';

import { TextField, Button, Container,
    CssBaseline, Typography, SnackbarContent
} from '@material-ui/core'
import ErrorIcon from '@material-ui/icons/Error';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        padding: 30,
        backgroundColor: '#fff',
        marginTop: 150,
        borderRadius: 10
    },
    error: {
        backgroundColor: '#d32f2f',
        marginBottom: '1rem'
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        opacity: 0.9,
        marginRight: 8,
    },
    submit: {
      marginTop: 16,
  },
}

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { userName, password } = this.state;
        this.props.login(userName, password);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        const { classes, loggingIn } = this.props
        if(loggingIn) {
            return <Redirect to={'/profile'}/>;
        }
            
        return (
            <Container component="main" maxWidth="xs">
                <div className={classes.root}>
                    <CssBaseline />
                    { this.props.errorMsg && 
                        <SnackbarContent className={classes.error} message={
                            <span className={classes.message}>
                                <ErrorIcon className={classes.icon}/> {this.props.errorMsg}
                            </span>
                        }/> 
                    }
                    <Typography component="h2" variant="h5" align="center">
                        Login
                    </Typography>
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            label="Name"
                            value={this.state.userName}
                            onChange={this.handleChange}
                            margin="normal"
                            name="userName"
                            fullWidth
                            required
                        />
                        <TextField
                            label="Password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            margin="normal"
                            name="password"
                            fullWidth
                            required
                        />
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            Primary
                        </Button>
                    </form>
                </div>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    const loggingIn = state.authentication.loggedIn;
    const errorMsg = state.authentication.error;
    return { loggingIn, errorMsg };
}

const actionCreators = {
    login: login
};

export default connect(mapStateToProps, actionCreators)(withStyles(styles)(Login))