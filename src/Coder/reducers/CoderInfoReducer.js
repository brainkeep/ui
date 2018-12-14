import * as ActionTypes from '../../Util/ActionTypes'

const init = {
    data: {},
    access_token: "",
    fetching: false,
    fetched: false,
    error: {}
}

const coderInfo = (coderInfo = init, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_CODER_ACCESS_TOKEN:
            return {
                ...coderInfo,
                access_token: action.payload
            }
        case ActionTypes.FETCH_CODER_INFO_PENDING:
            return {
                ...coderInfo,
                fetching: true
            }
        case ActionTypes.FETCH_CODER_INFO_FULFILLED:
            return {
                ...coderInfo,
                fetching: false,
                fetched: true,
                data: action.payload
            }
        case ActionTypes.FETCH_CODER_INFO_REJECTED:
            return {
                ...coderInfo,
                fetching: false,
                error: action.payload
            }
        default:
            return coderInfo
    }
}

export default coderInfo
