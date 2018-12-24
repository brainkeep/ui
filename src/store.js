// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';

// Middlewares
import thunk from "redux-thunk";

// Reducers
import CoderReducer from './reducers/CoderReducer';
import InReviewProblemsReducer from './reducers/InReviewProblemsReducer';
import ReviewQueueReducer from './reducers/ReviewQueueReducer';
import AppBarStatusReducer from './reducers/AppBarStatusReducer';
import NewProblemReducer from './reducers/NewProblemReducer';
import ProblemsReducer from './reducers/ProblemsReducer';

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
    problems: ProblemsReducer
})

const middlewares = applyMiddleware(thunk)

export default createStore(reducers, middlewares)