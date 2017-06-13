import {combineReducers}  from 'redux'
import AuthReducer from './auth_reducer'
import StoreReducer from './store_reducer'



const rootReducers = combineReducers({
      AuthReducer,
      StoreReducer
})

export default rootReducers