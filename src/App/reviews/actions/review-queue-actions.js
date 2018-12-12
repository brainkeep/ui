import axios from "axios"
import * as actionTypes from '../util/action-types'
import * as host from '../util/host-info'
import * as path from '../util/resource-path'

export const fetchReviewQueue = dispatch => {
    const url = "http://" + host.IP_ADDRESS + ":" + host.PORT + "/" + path.FETCH_REVIEW_QUEUE_PATH + "?" + "coder_id=1"
    dispatch({type: actionTypes.FETCH_REVIEW_QUEUE_PENDING})
    axios.get(url)
    .then(response => dispatch({type: actionTypes.FETCH_REVIEW_QUEUE_FULFILLED, payload: response.data})) 
    .catch(err => dispatch({type: actionTypes.FETCH_REVIEW_QUEUE_REJECTED, payload: err}))
}
