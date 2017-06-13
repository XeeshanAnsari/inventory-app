import axios from 'axios';
import { browserHistory } from 'react-router';
import authActions from '../actions/auth_action'
const rooturl = "http://localhost:3090";


export default class AuthMiddelware {

    static SignUp(user) {
        return (dispatch) => {

            axios.post(`${rooturl}/api/signup`, user)
                .then((response) => {
                    if (response.status === 200) {
                        sessionStorage.setItem('token', response.data.token);
                        dispatch(authActions.SignUpWithSuccessFul(response.data))
                        browserHistory.push('/signin')
                    }
                })
                .catch((error) => {
                    dispatch(authActions.SignUpWithRejected(error))
                })
        }
    }


    static SignIn(user) {
        return (dispatch) => {

            axios.post(`${rooturl}/api/signin`, user)
                .then((response) => {
                    
                        sessionStorage.setItem('token', response.data.token);
                        dispatch(authActions.SignInWithSuccessFul(response.data))
                        browserHistory.push('/')
                    
                })
                .catch((error) => {
                    dispatch(authActions.SignInWithRejected(error))
                })
        }
    }

    static SignOut() {
        return (dispatch) => {
            sessionStorage.clear();
            localStorage.clear();
            dispatch(authActions.SignOutWithSuccessFul())
        }
    }
}