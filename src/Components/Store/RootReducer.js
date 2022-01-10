import { combineReducers } from "redux"
import TodoReducer from "./TodoReducer"

const RootReducer = combineReducers({
 Todo:TodoReducer
})

export default RootReducer
