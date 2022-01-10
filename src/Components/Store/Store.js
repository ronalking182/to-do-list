import { createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import RootReducer from './RootReducer'

const middleWare = [logger]

const Store = createStore(
RootReducer,
applyMiddleware(...middleWare)
)

export default Store