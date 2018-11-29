import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// middlewares
import logger from "redux-logger"
import thunk from "redux-thunk"
// reducers
import inReviewProblemsReducer from './reviews/reducers/in-review-problem-reducer'
import reviewQueue from './reviews/reducers/review-queue-reducer' 

const reducers = combineReducers({
    in_review_problems : inReviewProblemsReducer,
    review_queue : reviewQueue
})

const middlewares = composeWithDevTools(
    applyMiddleware(thunk, logger)
)

export default createStore(reducers, middlewares)