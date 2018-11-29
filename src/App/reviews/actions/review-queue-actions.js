import axios from "axios"

const host = "http://10.0.0.252:8080"
const path = "brainkeeper/review/queue/all"
const param = "coder_id=1"

export const fetchReviewQueue = dispatch => {
    dispatch({type: "FETCH_REVIEW_QUEUE_PENDING"})
    axios.get(host + "/" + path + "?" + param)
    .then(response => 
        dispatch({type: "FETCH_REVIEW_QUEUE_FULFILLED", payload: response.data})) 
    .catch(err => 
        dispatch({type: "FETCH_REVIEW_QUEUE_REJECTED", payload: err}))
}
