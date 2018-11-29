const init = {
    data: [],
    fetching: false,
    fetched: false,
    error: {}
}

const inReviewProblems = (inReviewProblems = init, action) => {
    switch (action.type) {
        case "FETCH_IN_REVIEW_PROBLEMS_PENDING":
            return {
                ...inReviewProblems, 
                fetching: true
            }
        case "FETCH_IN_REVIEW_PROBLEMS_REJECTED":
            return {
                ...inReviewProblems, 
                fetching: false, 
                error: action.payload
            }
        case "FETCH_IN_REVIEW_PROBLEMS_FULFILLED":
            return {
                ...inReviewProblems, 
                fetching: false, 
                fetched: true, 
                data: action.payload
            }
        default:
            return inReviewProblems
    }
}

export default inReviewProblems