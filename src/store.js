import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// middlewares
import logger from "redux-logger"
import thunk from "redux-thunk"
// reducers
import CoderInfoReducer from './reducers/CoderInfoReducer'
import InReviewProblemsReducer from './reducers/InReviewProblemsReducer'
import ReviewQueueReducer from './reducers/ReviewQueueReducer'

const reducers = combineReducers({
    coder_info: CoderInfoReducer,
    in_review_problems: InReviewProblemsReducer,
    review_queue: ReviewQueueReducer
})

const middlewares = composeWithDevTools(
    applyMiddleware(thunk, logger)
)

export default createStore(reducers, middlewares)