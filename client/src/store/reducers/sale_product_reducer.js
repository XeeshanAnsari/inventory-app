import saleProductActions from '../actions/sale_product_action'

const INITIAL_STATE = {
    sales: [],
    error: "",
    isError: false
};


export default function saleProductReducer(state = INITIAL_STATE, action) {
    switch (action.type) {


        case saleProductActions.CREATE_SALE_PRODUCT:
            return Object.assign({}, state, { sales: action.product, isError: false })
        case saleProductActions.CREATE_SALE_PRODUCT_REJECTED:
            return Object.assign({}, state, { error: action.error, isError: true })

        case saleProductActions.GET_SALES:
            return Object.assign({}, state, { sales: action.sales, isError: false })
        case saleProductActions.GET_SALES_REJECTED:
            return Object.assign({}, state, { error: action.error, isError: true })

       




        default:
            return state
    }
}