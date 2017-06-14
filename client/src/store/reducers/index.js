import {combineReducers}  from 'redux'
import AuthReducer from './auth_reducer'
import StoreReducer from './store_reducer'
import ProductReducer from './product_reducer'
import SaleProductReducer from './sale_product_reducer'



const rootReducers = combineReducers({
      AuthReducer,
      StoreReducer,
      ProductReducer,
      SaleProductReducer
})

export default rootReducers