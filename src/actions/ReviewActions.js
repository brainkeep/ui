import axios from "axios"
import * as ActionTypes from '../utilities/ActionTypes'
import * as HostInfo from '../utilities/HostInfo'
import * as ResourcePaths from '../utilities/ResourcePaths'

export const fetchInReviewProblems = (coder_id = -1) => dispatch => {
    dispatch({type: ActionTypes.FETCH_IN_REVIEW_PROBLEMS_PENDING})
    axios({
        method: 'get',
        url: HostInfo.BASE_URL + ResourcePaths.FETCH_IN_REVIEW_PROBLEMS_PATH,
        params: {
            coder_id: coder_id
        },
        responseType: 'json',
        timeout: 10000
    })
    .then(response => dispatch({type: ActionTypes.FETCH_IN_REVIEW_PROBLEMS_FULFILLED, payload: response.data})) 
    .catch(err => dispatch({type: ActionTypes.FETCH_IN_REVIEW_PROBLEMS_REJECTED, payload: err}))
}

export const completeReview = data => dispatch => {
    dispatch({type: ActionTypes.UPDATE_REVIEW_QUEUE_PENDING})    
    axios({
        method: 'put',
        url: HostInfo.BASE_URL + ResourcePaths.UPDATE_REVIEW_QUEUE_PATH,
        params: {
             review_id: data.review_id
        },
        responseType: 'json',
        timeout: 10000
    })
    .then(response => dispatch({type: ActionTypes.UPDATE_REVIEW_QUEUE_FULFILLED, payload: response.data})) 
    .catch(err => dispatch({type: ActionTypes.UPDATE_REVIEW_QUEUE_REJECTED, payload: err}))

    dispatch({type: ActionTypes.UPDATE_IN_REVIEW_PROBLEMS_PENDING})
    axios({
        method: 'put',
        url: HostInfo.BASE_URL + ResourcePaths.UPDATE_IN_REVIEW_PROBLEMS_PATH,
        params: {
              problem_id: data.problem_id
        },
        responseType: 'json',
        timeout: 10000
    })
    .then(response => dispatch({type: ActionTypes.UPDATE_IN_REVIEW_PROBLEMS_FULFILLED, payload: response.data})) 
    .catch(err => dispatch({type: ActionTypes.UPDATE_IN_REVIEW_PROBLEMS_REJECTED, payload: err}))
}

export const fetchReviewQueue = (coder_id = -1) => dispatch => {
    dispatch({type: ActionTypes.FETCH_REVIEW_QUEUE_PENDING})
    axios({
        method: 'get',
        url: HostInfo.BASE_URL + ResourcePaths.FETCH_REVIEW_QUEUE_PATH,
        params: {
              coder_id: coder_id
        },
        responseType: 'json',
        timeout: 10000
    })
    .then(response => dispatch({type: ActionTypes.FETCH_REVIEW_QUEUE_FULFILLED, payload: response.data})) 
    .catch(err => dispatch({type: ActionTypes.FETCH_REVIEW_QUEUE_REJECTED, payload: err}))
}
