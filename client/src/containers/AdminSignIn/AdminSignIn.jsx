import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { browserHistory }  from 'react-router'
import AuthMiddelware from './../../store/middleware/auth_middleware'
import './AdminSignIn.css'

function mapDispatchToProps(dispatch) {
    return {
        signin: (admin) => dispatch(AuthMiddelware.AdminSignIn(admin)),

    }
}

class AdminSignIn extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            password: '',
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
                        <h1>Admin Log In</h1>
                        <form onSubmit={this.handleSignIn}>
                            <TextField
                                value={this.state.id}
                                floatingLabelText="ID"
                                hintText="ID"
                                fullWidth={true}
                                onChange={e => this.setState({ id: e.target.value })}
                            />
                            <TextField
                                value={this.state.password}
                                floatingLabelText="Password"
                                hintText="Password"
                                fullWidth={true}
                                type="password"
                                onChange={e => this.setState({ password: e.target.value })}
                            />

                            <RaisedButton
                                type="submit"
                                label="Sign In"
                                className="signin-btn"
                                primary={true} />
                            
                            <RaisedButton
                                label="Sign In As Store"
                                className="store-btn"
                                primary={true}
                                onTouchTap={() => browserHistory.push('/signin')}

                            />
                        </form>
                    </Paper >
                </div>


            </div>
        )
    }
}



export default connect(null, mapDispatchToProps)(AdminSignIn);