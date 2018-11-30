import axios from "axios"

const host = "http://10.0.0.252:8080"

export const completeReview = data => dispatch => {
    dispatch({type: "UPDATE_REVIEW_QUEUE_PENDING"})    
    axios.put(host + "/brainkeeper/review/queue/one?review_id=" + data.review_id)
    .then(response => 
        dispatch({type: "UPDATE_REVIEW_QUEUE_FULFILLED", payload: response.data})) 
    .catch(err => 
        dispatch({type: "UPDATE_REVIEW_QUEUE_REJECTED", payload: err}))

    dispatch({type: "UPDATE_IN_REVIEW_PROBLEMS_PENDING"})
    axios.put(host + "/brainkeeper/problem/review?problem_id=" + data.problem_id)
    .then(response => 
        dispatch({type: "UPDATE_IN_REVIEW_PROBLEMS_FULFILLED", payload: response.data})) 
    .catch(err => 
        dispatch({type: "UPDATE_IN_REVIEW_PROBLEMS_REJECTED", payload: err}))
}
