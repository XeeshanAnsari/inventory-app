import {combineReducers}  from 'redux'
import AuthReducer from './auth_reducer'
import StoreReducer from './store_reducer'
import ProductReducer from './product_reducer'



const rootReducers = combineReducers({
      AuthReducer,
      StoreReducer,
      ProductReducer
})

export default rootReducers