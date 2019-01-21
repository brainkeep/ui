import * as ActionTypes from '../app/ActionTypes';

const init = {
    data: [],
    fetching: false,
    fetched: false,
    error: {}
}

const problems = (problems = init, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_PROBLEMS_PENDING:
            return {
                ...problems,
                fetching: true
            }
        case ActionTypes.FETCH_PROBLEMS_FULFILLED:
            return {
                ...problems,
                fetching: false,
                fetched: true,
                data: action.payload
            }
        case ActionTypes.FETCH_PROBLEMS_REJECTED:
            return {
                ...problems,
                fetching: false,
                error: action.payload
            }
        default:
            return problems
    }
}

export default problems;
