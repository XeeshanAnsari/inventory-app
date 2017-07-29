import axios from 'axios';
import { browserHistory } from 'react-router';
import authActions from '../actions/auth_action'
import {rooturl} from '../../store/configUrl';



export default class AuthMiddelware {

    static userSignUp(user) {
        return (dispatch) => {

            axios.post(`${rooturl}/api/createUser`, user)
                .then((response) => {
                    if (response.status === 200) {
                        sessionStorage.setItem('token', response.data.token);
                    }
                })
                .catch((error) => {
                    dispatch(authActions.SignUpWithRejected(error))
                })
        }
    }

    static AdminSignIn(admin) {
        return (dispatch) => {
            console.log(admin)
            axios.post(`${rooturl}/api/signinAdmin`, admin)
                .then((response) => {
                    if (response.status === 200) {
                        sessionStorage.setItem('token', response.data.token)
                        let isAdmin = true;
                        dispatch(authActions.SignInAsAdmin(isAdmin))
                        browserHistory.push('/')
                    }
                })
                .catch((error) => {
                    dispatch(authActions.SignInWithRejected(error))
                })
        }
    }

    static UserSignIn(user) {
        return (dispatch) => {
            console.log(user)
            axios.post(`${rooturl}/api/userSignIn`, user)
                .then((response) => {
                    if (response.status === 200) {
                        let storeId = response.data.user.storeId;
                        console.log(response.data.user.storeId)
                         let isUser = true;
                        sessionStorage.setItem('token', response.data.token);
                        dispatch(authActions.SignInAsUser(response.data, storeId))
                        browserHistory.push('/')
                    }
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
            browserHistory.push('/signin')
        }
    }
}