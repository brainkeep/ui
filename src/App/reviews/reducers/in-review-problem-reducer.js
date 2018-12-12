import * as actionTypes from '../util/action-types'

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
        case actionTypes.FETCH_IN_REVIEW_PROBLEMS_PENDING:
            return {
                ...inReviewProblems, 
                fetching: true
            }
        case actionTypes.FETCH_IN_REVIEW_PROBLEMS_REJECTED:
            return {
                ...inReviewProblems, 
                fetching: false, 
                error: action.payload
            }
        case actionTypes.FETCH_IN_REVIEW_PROBLEMS_FULFILLED:
            return {
                ...inReviewProblems, 
                fetching: false, 
                fetched: true, 
                data: action.payload
            }
        case actionTypes.UPDATE_IN_REVIEW_PROBLEMS_PENDING:
            return {
                ...inReviewProblems, 
                updating: true
            }
        case actionTypes.UPDATE_IN_REVIEW_PROBLEMS_REJECTED:
            return {
                ...inReviewProblems, 
                updating: false,
                error: action.payload
            }
        case actionTypes.UPDATE_IN_REVIEW_PROBLEMS_FULFILLED:
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