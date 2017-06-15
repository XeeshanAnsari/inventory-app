import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { Link, browserHistory } from 'react-router'
import  AuthMiddelware from './../../store/middleware/auth_middleware'
import { connect } from 'react-redux'
import './Buttons.css'

function mapStateToProps(state) {
    return {
        isAuth: state.AuthReducer.isAuthenticated
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(AuthMiddelware.SignOut())
    }
}

class Buttons extends Component {
    constructor() {
        super()
        this.handleLogOut = this.handleLogOut.bind(this)
    }
    handleLogOut(e) {
        e.preventDefault();
        this.props.logout();
    }


    render() {

        return (
            <div>
                <div >
                    {console.log(this.props.isAuth)}
                    {(this.props.isAuth === false)
                        ?
                      
                        <div>
                            <Link to="/signin" className='buttons'><RaisedButton type="submit" primary={true} >Sign In</RaisedButton></Link>
                            {/*<Link to="/signup" className='buttons'><RaisedButton type="submit" primary={true} >Sign Up</RaisedButton></Link>*/}
                        </div>
                        :
                        <div>
                            <RaisedButton
                                onClick={this.handleLogOut}
                                className='buttons'
                                primary={true}

                            >LogOut</RaisedButton>


                        </div>
                    }
                </div>

            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
