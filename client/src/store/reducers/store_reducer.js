import storeActions from '../actions/store_action'

const INITIAL_STATE = {

    stores: [],
    error: "",
    isError: false
};


export default function StoreReducer(state = INITIAL_STATE, action) {
    switch (action.type) {


        case storeActions.CREATE_STORE:
            return Object.assign({}, state, { stores: action.store, isError: false })
        case storeActions.CREATE_STORE_REJECTED:
            return Object.assign({}, state, { error: action.error, isError: true })

        case storeActions.GET_STORES:
            return Object.assign({}, state, { stores: action.store, isError: false })
        case storeActions.GETS_STORES_REJECTED:
            return Object.assign({}, state, { error: action.error, isError: true })

        case storeActions.DELETE_STORE:
            return Object.assign({}, state, { isError: false })
        case storeActions.DELETE_STORE_REJECTED:
            return Object.assign({}, state, { error: action.error, isError: true })

        case storeActions.EDIT_STORE:
            return Object.assign({}, state, { isError: false })
        case storeActions.EDIT_STORE_REJECTED:
            return Object.assign({}, state, { error: action.error, isError: true })




        default:
            return state
    }
}