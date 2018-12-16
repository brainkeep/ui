import axios from "axios"
import * as ActionTypes from '../util/ActionTypes'
import * as HostInfo from '../util/HostInfo'
import * as ResourcePaths from '../util/ResourcePaths'

export const fetchProblems = coder_id => dispatch => {
    dispatch({type: ActionTypes.FETCH_PROBLEMS_PENDING})
    axios({
        method: 'get',
        url: HostInfo.BASE_URL + ResourcePaths.FETCH_PROBLEMS_PATH,
        params: {
            coder_id: coder_id
        },
        responseType: 'json',
        timeout: 10000
    })
    .then(response => dispatch({type: ActionTypes.FETCH_PROBLEMS_FULFILLED, payload: response.data}))
    .catch(err => dispatch({type: ActionTypes.FETCH_PROBLEMS_REJECTED, payload: err}))
}

