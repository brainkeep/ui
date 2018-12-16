import axios from "axios"
import * as ActionTypes from '../util/ActionTypes'
import * as HostInfo from '../util/HostInfo'
import * as ResourcePaths from '../util/ResourcePaths'

export const changeCoderAccessToken = access_token => dispatch => {
    dispatch({type: ActionTypes.CHANGE_CODER_ACCESS_TOKEN, payload: access_token})
}

export const fetchCoder = access_token => dispatch => {
    dispatch({type: ActionTypes.FETCH_CODER_PENDING})
    axios({
        method: 'get',
        url: HostInfo.BASE_URL + ResourcePaths.FETCH_CODER_PATH,
        params: {
            access_token: access_token
        },
        responseType: 'json',
        timeout: 10000
    })
    .then(response => dispatch({type: ActionTypes.FETCH_CODER_FULFILLED, payload: response.data}))
    .catch(err => dispatch({type: ActionTypes.FETCH_CODER_REJECTED, payload: err}))
}

