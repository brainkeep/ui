import axios from "axios"

const host = "http://10.0.0.252:8080"
const path = "brainkeeper/problem/queued/true/all"
const param = "coder_id=1"

export const fetchInReviewProblems = dispatch => {
    dispatch({type: "FETCH_IN_REVIEW_PROBLEMS_PENDING"})
    axios.get(host + "/" + path + "?" + param)
    .then(response => 
        dispatch({type: "FETCH_IN_REVIEW_PROBLEMS_FULFILLED", payload: response.data})) 
    .catch(err => 
        dispatch({type: "FETCH_IN_REVIEW_PROBLEMS_REJECTED", payload: err}))
}