import axios from "axios"
import * as actionTypes from '../util/action-types'
import * as host from '../util/host-info'
import * as path from '../util/resource-path'

export const completeReview = data => dispatch => {
    const url1 = "http://" + host.IP_ADDRESS + ":" + host.PORT + "/" + path.UPDATE_REVIEW_QUEUE_PATH + "?review_id=" + data.review_id
    dispatch({type: actionTypes.UPDATE_REVIEW_QUEUE_PENDING})    
    axios.put(url1)
    .then(response => dispatch({type: actionTypes.UPDATE_REVIEW_QUEUE_FULFILLED, payload: response.data})) 
    .catch(err => dispatch({type: actionTypes.UPDATE_REVIEW_QUEUE_REJECTED, payload: err}))

    const url2 = "http://" + host.IP_ADDRESS + ":" + host.PORT + "/" + path.UPDATE_IN_REVIEW_PROBLEMS_PATH + "?problem_id=" + data.problem_id
    dispatch({type: actionTypes.UPDATE_IN_REVIEW_PROBLEMS_PENDING})
    axios.put(url2)
    .then(response => dispatch({type: actionTypes.UPDATE_IN_REVIEW_PROBLEMS_FULFILLED, payload: response.data})) 
    .catch(err => dispatch({type: actionTypes.UPDATE_IN_REVIEW_PROBLEMS_REJECTED, payload: err}))
}
