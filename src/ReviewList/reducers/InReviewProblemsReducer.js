import * as ActionTypes from '../util/ActionTypes'

const init = {
    data: [],
    fetching: false,
    fetched: false,
    updating: false,
    updated: false,
    error: {}
}

const inReviewProblems = (inReviewProblems = init, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_IN_REVIEW_PROBLEMS_PENDING:
            return {
                ...inReviewProblems, 
                fetching: true
            }
        case ActionTypes.FETCH_IN_REVIEW_PROBLEMS_REJECTED:
            return {
                ...inReviewProblems, 
                fetching: false, 
                error: action.payload
            }
        case ActionTypes.FETCH_IN_REVIEW_PROBLEMS_FULFILLED:
            return {
                ...inReviewProblems, 
                fetching: false, 
                fetched: true, 
                data: action.payload
            }
        case ActionTypes.UPDATE_IN_REVIEW_PROBLEMS_PENDING:
            return {
                ...inReviewProblems, 
                updating: true
            }
        case ActionTypes.UPDATE_IN_REVIEW_PROBLEMS_REJECTED:
            return {
                ...inReviewProblems, 
                updating: false,
                error: action.payload
            }
        case ActionTypes.UPDATE_IN_REVIEW_PROBLEMS_FULFILLED:
            return {
                ...inReviewProblems, 
                updating: false,
                updated: true,
                data: inReviewProblems.data.filter(d => d.problem_id !== action.payload.problem_id)
            }
        default:
            return inReviewProblems
    }
}

export default inReviewProblems