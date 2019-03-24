// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Middlewares
import logger from "redux-logger";
import thunk from 'redux-thunk';
// Reducers
import CoderReducer from './CoderReducer';

import HeaderReducer from './HeaderReducer';
import ProblemsReducer from './ProblemsReducer';
import NewQuestionReducer from './NewQuestionReducer';
import InReviewProblemsReducer from './InReviewProblemsReducer';
import ReviewQueueReducer from './ReviewQueueReducer';


const reducers = combineReducers({
  coder: CoderReducer,
  in_review_problems: InReviewProblemsReducer,
  review_queue: ReviewQueueReducer,
  header_status: HeaderReducer,
  new_question: NewQuestionReducer,
  problems: ProblemsReducer
});

const middlewares = composeWithDevTools(
  applyMiddleware(thunk, logger)
);

export default createStore(reducers, middlewares);