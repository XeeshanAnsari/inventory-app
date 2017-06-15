import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'



export default function (ComposedComponent) {
    function mapStateToProps(state) {
        return {
            isAuth: state.AuthReducer.isAuthenticated
        }
    }

    class Authentication extends Component {

        static contextType = {
            router: React.PropTypes.object
        }

        componentWillMount() {
            if (!this.props.isAuth) {
                browserHistory.push('/signin')
            }
        }
        componentWillUpdate(nextProps) {
            if (!this.props.isAuth) {
                browserHistory.push('/signin')
            }
        }

        render() {
            return <ComposedComponent {...this.props} />


        }

    }
    return connect(mapStateToProps)(Authentication);
}