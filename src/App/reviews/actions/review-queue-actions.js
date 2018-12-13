import axios from "axios"
import * as actionTypes from '../util/action-types'
import * as host from '../util/host-info'
import * as path from '../util/resource-path'

export const fetchReviewQueue = dispatch => {
    dispatch({type: actionTypes.FETCH_REVIEW_QUEUE_PENDING})
    axios({
        method: 'get',
        url: host.BASE_URL + path.FETCH_REVIEW_QUEUE_PATH,
        params: {
            coder_id: 1
        },
        responseType: 'json',
        timeout: 10000
    })
    .then(response => dispatch({type: actionTypes.FETCH_REVIEW_QUEUE_FULFILLED, payload: response.data})) 
    .catch(err => dispatch({type: actionTypes.FETCH_REVIEW_QUEUE_REJECTED, payload: err}))
}
