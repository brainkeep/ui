// Redux
import {applyMiddleware, combineReducers, createStore} from 'redux';
// Middlewares
import thunk from 'redux-thunk';
// Reducers
import CoderReducer from '../login/CoderReducer';

import AppBarStatusReducer from '../header/AppBarStatusReducer';
import ProblemsReducer from '../header/ProblemsReducer';
import NewProblemReducer from '../header/NewProblemReducer';

import InReviewProblemsReducer from '../review/InReviewProblemsReducer';
import ReviewQueueReducer from '../review/ReviewQueueReducer';

/*

██████╗  █████╗ ████████╗ █████╗     ███████╗████████╗ ██████╗ ██████╗ ███████╗
██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗    ██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗██╔════╝
██║  ██║███████║   ██║   ███████║    ███████╗   ██║   ██║   ██║██████╔╝█████╗  
██║  ██║██╔══██║   ██║   ██╔══██║    ╚════██║   ██║   ██║   ██║██╔══██╗██╔══╝  
██████╔╝██║  ██║   ██║   ██║  ██║    ███████║   ██║   ╚██████╔╝██║  ██║███████╗
╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝    ╚══════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝
                                                                                                                     
*/

const reducers = combineReducers({
  coder: CoderReducer,
  in_review_problems: InReviewProblemsReducer,
  review_queue: ReviewQueueReducer,
  appbar_status: AppBarStatusReducer,
  new_problem: NewProblemReducer,
  problems: ProblemsReducer,
});

const middlewares = applyMiddleware(thunk);

export default createStore(reducers, middlewares);