import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// middlewares
import logger from "redux-logger"
import thunk from "redux-thunk"
// reducers
import ReviewListReducer from './ReviewList/ReviewListReducer'

const reducers = combineReducers({
    review_list: ReviewListReducer
})

const middlewares = composeWithDevTools(
    applyMiddleware(thunk, logger)
)

export default createStore(reducers, middlewares)