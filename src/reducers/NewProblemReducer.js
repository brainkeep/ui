import * as ActionTypes from '../util/ActionTypes'

const init = {
    problem_name: "",
    problem_url: "",
    saving: false,
    saved: false,
    response: {},
    error: {},
}

const newProblem = (newProblem = init, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_NEW_PROBLEM_NAME:
            return {
                ...newProblem,
                problem_name: action.payload
            }
        case ActionTypes.CHANGE_NEW_PROBLEM_URL:
            return {
                ...newProblem,
                problem_url: action.payload
            }
        case ActionTypes.SAVE_NEW_PROBLEM_PENDING:
            return {
                ...newProblem,
                saving: true
            }
        case ActionTypes.SAVE_NEW_PROBLEM_FULFILLED:
            return {
                ...newProblem,
                saving: false,
                saved: true,
                response: action.payload
            }
        case ActionTypes.SAVE_NEW_PROBLEM_REJECTED:
            return {
                ...newProblem,
                saving: false,
                saved: false,
                error: action.payload
            }
        default:
            return newProblem
    }
}

export default newProblem