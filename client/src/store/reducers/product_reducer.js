import productActions from '../actions/product_action'

const INITIAL_STATE = {
    products: [],
    error: "",
    isError: false
};


export default function productReducer(state = INITIAL_STATE, action) {
    switch (action.type) {


        case productActions.CREATE_PRODUCT:
            return Object.assign({}, state, { products: action.product, isError: false })
        case productActions.CREATE_PRODUCT_REJECTED:
            return Object.assign({}, state, { error: action.error, isError: true })

        case productActions.GET_PRODUCTS:
            return Object.assign({}, state, { products: action.product, isError: false })
        case productActions.GETS_PRODUCTS_REJECTED:
            return Object.assign({}, state, { error: action.error, isError: true })

        case productActions.DELETE_PRODUCT:
            return Object.assign({}, state, { isError: false })
        case productActions.DELETE_PRODUCT_REJECTED:
            return Object.assign({}, state, { error: action.error, isError: true })

        case productActions.EDIT_PRODUCT:
            return Object.assign({}, state, { isError: false })
        case productActions.EDIT_PRODUCT_REJECTED:
            return Object.assign({}, state, { error: action.error, isError: true })




        default:
            return state
    }
}