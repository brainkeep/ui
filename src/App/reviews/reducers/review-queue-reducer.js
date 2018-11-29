const init = {
    data: [],
    fetching: false,
    fetched: false,
    error: {}
}

const reviewQueue = (reviewQueue = init, action) => {
    switch (action.type) {
        case "FETCH_REVIEW_QUEUE_PENDING":
            return {
                ...reviewQueue, 
                fetching: true
            }
        case "FETCH_REVIEW_QUEUE_REJECTED":
            return {
                ...reviewQueue, 
                fetching: false, 
                error: action.payload
            }
        case "FETCH_REVIEW_QUEUE_FULFILLED":
            return {
                ...reviewQueue, 
                fetching: false, 
                fetched: true, 
                data: action.payload
            }
        default:
            return reviewQueue
    }
}

export default reviewQueue