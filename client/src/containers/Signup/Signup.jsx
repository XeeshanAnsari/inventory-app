import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import  AuthMiddelware from './../../store/middleware/auth_middleware'
import './Signup.css'


function mapDispatchToProps(dispatch) {
    return {
        signup: (data) => dispatch(AuthMiddelware.SignUp(data))
    }
}

class SignUp extends Component {

    constructor(props) {
        super(props)
        this.handleSignUp = this.handleSignUp.bind(this)
    }
    //handele Signup
    handleSignUp(e) {
        e.preventDefault();
        const newUser = {
            fullName: this.refs.fullName.getValue(),
            email: this.refs.email.getValue(),
            password: this.refs.pass.getValue(),
        }
        console.log(newUser)
        this.props.signup(newUser);

    }

    render() {
        return (
            <div>

                <div className="signup-container">
                    <Paper className="signup-paper" >
                        <h1>Sign Up</h1>
                        <form onSubmit={this.handleSignUp}>
                            <TextField
                                ref="fullName"
                                floatingLabelText="Full Name"
                                hintText="Full Name"
                                fullWidth={true}
                                required
                            />
                            
                            <TextField
                                ref="email"
                                type='email'
                                floatingLabelText="Email"
                                hintText="Email"
                                fullWidth={true}
                                required
                            />
                            <TextField
                                ref="pass"
                                floatingLabelText="Password"
                                hintText="Password"
                                fullWidth={true}
                                required
                                type="password"
                            />

                            <RaisedButton
                                type="submit"
                                label="Signup"
                                className="signup-btn"
                                primary={true}
                            />


                        </form>
                    </Paper >
                </div>
            </div>
        )
    }
}


export default connect(null, mapDispatchToProps)(SignUp);