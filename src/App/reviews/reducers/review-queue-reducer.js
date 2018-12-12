import * as actionTypes from '../util/action-types'

const init = {
    data: [],
    fetching: false,
    fetched: false,
    updating: false,
    updated: false,
    error: {}
}

const reviewQueue = (reviewQueue = init, action) => {
    switch (action.type) {
        case actionTypes.FETCH_REVIEW_QUEUE_PENDING:
            return {
                ...reviewQueue, 
                fetching: true
            }
        case actionTypes.FETCH_REVIEW_QUEUE_REJECTED:
            return {
                ...reviewQueue, 
                fetching: false, 
                error: action.payload
            }
        case actionTypes.FETCH_REVIEW_QUEUE_FULFILLED:
            return {
                ...reviewQueue, 
                fetching: false, 
                fetched: true, 
                data: action.payload
            }
        case actionTypes.UPDATE_REVIEW_QUEUE_PENDING:
            return {
                ...reviewQueue, 
                updating: true
            }
        case actionTypes.UPDATE_REVIEW_QUEUE_REJECTED:
            return {
                ...reviewQueue, 
                updating: false,
                error: action.payload,
            }
        case actionTypes.UPDATE_REVIEW_QUEUE_FULFILLED:
            return {
                ...reviewQueue, 
                updating: false,
                updated: true,
                data: reviewQueue.data.filter(d => d.review_id !== action.payload.review_id)
            }
        default:
            return reviewQueue
    }
}

export default reviewQueue