import {createStore ,applyMiddleware}  from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import rootReducers from './reducers'


const logger = createLogger();

const store = createStore(
    rootReducers,
    applyMiddleware(thunk , logger)
)

export default store