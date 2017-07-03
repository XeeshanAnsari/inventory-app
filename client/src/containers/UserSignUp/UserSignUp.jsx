import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import  AuthMiddelware from './../../store/middleware/auth_middleware'
import './UserSignUp.css'


function mapDispatchToProps(dispatch) {
    return {
        signup: (data) => dispatch(AuthMiddelware.userSignUp(data))
    }
}

class UserSignUp extends Component {

    constructor(props) {
        super(props)
        this.handleSignUp = this.handleSignUp.bind(this)
    }
    //handele Signup
    handleSignUp(e) {
        e.preventDefault();
        const newUser = {
            distribution: this.refs.distribution.getValue(),
            storeId: this.refs.storeId.getValue(),
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
                                ref="distribution"
                                floatingLabelText="Distribution Name"
                                hintText="Distribution Name"
                                fullWidth={true}
                                required
                            />
                            <TextField
                                ref="storeId"
                                floatingLabelText="Store Id"
                                hintText="Store Id"
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


export default connect(null, mapDispatchToProps)(UserSignUp);