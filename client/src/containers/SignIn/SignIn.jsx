import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import  AuthMiddelware from './../../store/middleware/auth_middleware'
import './SignIn.css'

function mapDispatchToProps(dispatch) {
    return {
        signin: (user) => dispatch(AuthMiddelware.SignIn(user)),

    }
}

class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            pass: '',
        }
        this.handleSignIn = this.handleSignIn.bind(this)

    }


    handleSignIn(e) {
        e.preventDefault();
        this.props.signin(this.state);

    }



    render() {
        return (

            <div>


                <div className="signin-container">
                    <Paper className="signin-paper" >
                        <h1>Log In</h1>
                        <form onSubmit={this.handleSignIn}>
                            <TextField
                                value={this.state.email}
                                floatingLabelText="Email"
                                hintText="Email"
                                fullWidth={true}
                                onChange={e => this.setState({ email: e.target.value })}
                            />
                            <TextField
                                value={this.state.pass}
                                floatingLabelText="Password"
                                hintText="Password"
                                fullWidth={true}
                                type="password"
                                onChange={e => this.setState({ pass: e.target.value })}
                            />

                            <RaisedButton
                                type="submit"
                                label="Sign In"
                                className="signin-btn"
                                primary={true} />


                        </form>
                    </Paper >
                </div>


            </div>
        )
    }
}



export default connect(null, mapDispatchToProps)(SignIn);