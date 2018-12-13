import axios from "axios"
import * as actionTypes from '../util/action-types'
import * as host from '../util/host-info'
import * as path from '../util/resource-path'

export const fetchInReviewProblems = dispatch => {
    dispatch({type: actionTypes.FETCH_IN_REVIEW_PROBLEMS_PENDING})
    axios({
        method: 'get',
        url: host.BASE_URL + path.FETCH_IN_REVIEW_PROBLEMS_PATH,
        params: {
            coder_id: 1
        },
        responseType: 'json',
        timeout: 10000
    })
    .then(response => dispatch({type: actionTypes.FETCH_IN_REVIEW_PROBLEMS_FULFILLED, payload: response.data})) 
    .catch(err => dispatch({type: actionTypes.FETCH_IN_REVIEW_PROBLEMS_REJECTED, payload: err}))
}