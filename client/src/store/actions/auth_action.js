

export default class authActions {

    static SIGN_UP = "SIGN_UP";
    static SIGN_UP_WITH_SUCCESSFUL = "SIGN_UP_WITH_SUCCESSFULL";
    static SIGN_UP_WITH_REJECTED = "SIGN_UP_WITH_REJECTED";

    static SIGN_IN = "SIGN_IN";
    static SIGN_IN_WITH_SUCCESSFUL = "SIGN_IN_WITH_SUCCESSFULL";
    static SIGN_IN_WITH_REJECTED = "SIGN_IN_WITH_REJECTED";

    static SIGN_OUT = "SIGN_OUT";
    static SIGN_OUT_WITH_SUCCESSFUL = "SIGN_OUT_WITH_SUCCESSFULL";
    static SIGN_OUT_WITH_REJECTED = "SIGN_OUT_WITH_REJECTED";

    static SIGN_IN_AS_ADMIN = "SIGN_IN_AS_ADMIN";

    static SignUp() {
        return {
            type: authActions.SIGN_UP
        }
    }
    static SignUpWithSuccessFul(user) {
        return {
            type: authActions.SIGN_UP_WITH_SUCCESSFUL,
            user

        }
    }
    static SignUpWithRejected(error) {
        return {
            type: authActions.SIGN_UP_WITH_REJECTED,
            error
        }
    }
    static SignIn() {
        return {
            type: authActions.SIGN_IN
        }
    }
    static SignInWithSuccessFul(user, storeId) {
        return {
            type: authActions.SIGN_IN_WITH_SUCCESSFUL,
            user:user,
            storeId:storeId

        }
    }
    static SignInAsAdmin(){
        return{
            type:authActions.SIGN_IN_AS_ADMIN,
        }
    }

    static SignInWithRejected(error) {
        return {
            type: authActions.SIGN_IN_WITH_REJECTED,
            error
        }
    }
    static SignOut() {
        return {
            type: authActions.SIGN_OUT
        }
    }
    static SignOutWithSuccessFul() {
        return {
            type: authActions.SIGN_OUT_WITH_SUCCESSFUL
        }
    }
    static SignUpWithRejected(error) {
        return {
            type: authActions.SIGN_OUT_WITH_REJECTED,
            error
        }
    }
}