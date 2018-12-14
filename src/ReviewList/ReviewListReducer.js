import { combineReducers } from 'redux'
import InReviewProblemsReducer from './reducers/InReviewProblemsReducer'
import ReviewQueueReducer from './reducers/ReviewQueueReducer'

const ReviewListReducer = combineReducers({
  in_review_problems : InReviewProblemsReducer,
  review_queue : ReviewQueueReducer
})

export default ReviewListReducer