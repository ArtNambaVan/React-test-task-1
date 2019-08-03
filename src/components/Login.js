import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
        console.log(e.target)
    }

    handleChange = (e) => {
        console.log(e.target.name)
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        required
                        label="Name"
                        value={this.state.userName}
                        onChange={this.handleChange}
                        margin="normal"
                        name="userName"
                    />
                    <TextField
                        required
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
export default Login