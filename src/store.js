// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

// Middlewares
import logger from "redux-logger"
import thunk from "redux-thunk"

// Reducers
import CoderInfoReducer from './reducers/CoderInfoReducer'
import InReviewProblemsReducer from './reducers/InReviewProblemsReducer'
import ReviewQueueReducer from './reducers/ReviewQueueReducer'
import AppBarStatusReducer from './reducers/AppBarStatusReducer'
import NewProblemReducer from './reducers/NewProblemReducer'

const reducers = combineReducers({
    coder_info: CoderInfoReducer,
    in_review_problems: InReviewProblemsReducer,
    review_queue: ReviewQueueReducer,
    appbar_status: AppBarStatusReducer,
    new_problem: NewProblemReducer
})

const middlewares = composeWithDevTools(
    applyMiddleware(thunk, logger)
)

export default createStore(reducers, middlewares)