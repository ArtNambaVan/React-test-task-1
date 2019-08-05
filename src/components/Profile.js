import React from 'react'
import { connect } from 'react-redux'
import { logOut } from '../actions/login';
import { Container, CssBaseline, Typography, Button } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/styles';

const styles = {
    user: {
        padding: 30,
        marginTop: 150,
        backgroundColor: '#fff',
        borderRadius: 10,
        textAlign: 'center'
    },
    userName: {
        marginBottom: 10,
        color: '#333',
    },
    userIcon: {
        width: 80,
        height: 80,
        display: 'block',
        margin: '0 auto 10px auto',
    }
}

class Profile extends React.Component {
    logOut = (e) => {
        this.props.logOut();
    };
    render() {
        const { classes } = this.props;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.user}>
                    <Typography component="h2" variant="h5">
                        Profile
                    </Typography>
                    
                    { this.props.user &&
                    <Typography className={classes.userName} variant="body2" color="textSecondary" component="p">
                        {this.props.user}
                    </Typography>    
                    }
                    <AccountCircle className={classes.userIcon}/>
                    <Button onClick={this.logOut} variant="contained" color="primary" align="center">Log out</Button>
                </div>
                
            </Container>
            
        )
    }
}

const mapStateToProps = state => {
    const loggingIn = state.authentication.loggedIn;
    const user = state.authentication.user
    return { user, loggingIn }
}

const actionCreators = {
    logOut: logOut
};


export default connect(mapStateToProps, actionCreators)(withStyles(styles)(Profile))