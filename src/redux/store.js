import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import commonReducer from "./reducers/commonReducer"

const rootReducer = combineReducers({
    common: commonReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
