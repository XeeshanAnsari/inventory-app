import authActions from '../actions/auth_action'

const INITIAL_STATE = {
    isRegistered: true,
    isAuthenticated: false,
    isAdmin: false,
    storeId: "",
    userInfo: [],
    error: "",
    isError: false
};


export default function AuthReducer(state = INITIAL_STATE, action) {
    switch (action.type) {


        case authActions.SIGN_UP:
            return Object.assign({}, state, { isRegistered: false })
        case authActions.SIGN_UP_WITH_SUCCESSFUL:
            return Object.assign({}, state, { userInfo: action.user, isRegistered: true })
        case authActions.SIGN_UP_WITH_REJECTED:
            return Object.assign({}, state, { error: action.error, isRegistered: false, isError: true })

        case authActions.SIGN_IN:
            return Object.assign({}, state, { isRegistered: false })
        case authActions.SIGN_IN_WITH_SUCCESSFUL:
            return Object.assign({}, state, { userInfo: action.user, storeId: action.storeId, isAuthenticated: true, isError: false })
        case authActions.SIGN_IN_AS_ADMIN:
            return Object.assign({}, state, { isAdmin:true , isAuthenticated: true, isError: false })
        case authActions.SIGN_IN_WITH_REJECTED:
            return Object.assign({}, state, { error: action.error, isRegistered: false, isError: true })

        case authActions.SIGN_OUT:
            return Object.assign({}, state, { isError: false })
        case authActions.SIGN_OUT_WITH_SUCCESSFUL:
            return Object.assign({}, state, { isAuthenticated: false, isError: false })
        case authActions.SIGN_OUT_WITH_REJECTED:
            return Object.assign({}, state, { isAuthenticated: true, isError: true })




        default:
            return state
    }
}