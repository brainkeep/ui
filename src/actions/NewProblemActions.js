import axios from "axios"
import * as ActionTypes from '../util/ActionTypes'
import * as HostInfo from '../util/HostInfo'
import * as ResourcePaths from '../util/ResourcePaths'

export const changeNewProblemName = problem_name => dispatch => {
    dispatch({type: ActionTypes.CHANGE_NEW_PROBLEM_NAME, payload: problem_name})
}

export const changeNewProblemUrl = problem_url => dispatch => {
    dispatch({type: ActionTypes.CHANGE_NEW_PROBLEM_URL, payload: problem_url})
}

export const saveNewProblem = (coder_id, problem_name, problem_url) => dispatch => {
    dispatch({type: ActionTypes.SAVE_NEW_PROBLEM_PENDING})
    axios({
        method: 'post',
        url: HostInfo.BASE_URL + ResourcePaths.SAVE_NEW_PROBLEM_PATH,
        responseType: 'json',
        timeout: 10000,
        data: {
            coder_id: coder_id,
            problem_name: problem_name,
            problem_url: problem_url
        }
    })
    .then(response => dispatch({type: ActionTypes.SAVE_NEW_PROBLEM_FULFILLED, payload: response}))
    .catch(err => dispatch({type: ActionTypes.SAVE_NEW_PROBLEM_REJECTED, payload: err}))
    .then(() => dispatch({type: ActionTypes.CLOSE_APPBAR_DIALOG}))
}
