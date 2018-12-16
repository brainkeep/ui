import * as ActionTypes from '../utilities/ActionTypes'

const init = {
    data: {},
    access_token: "",
    fetching: false,
    fetched: false,
    error: {}
}

const coder = (coder = init, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_CODER_ACCESS_TOKEN:
            return {
                ...coder,
                access_token: action.payload
            }
        case ActionTypes.FETCH_CODER_PENDING:
            return {
                ...coder,
                fetching: true
            }
        case ActionTypes.FETCH_CODER_FULFILLED:
            return {
                ...coder,
                fetching: false,
                fetched: true,
                data: action.payload
            }
        case ActionTypes.FETCH_CODER_REJECTED:
            return {
                ...coder,
                fetching: false,
                error: action.payload
            }
        default:
            return coder
    }
}

export default coder
