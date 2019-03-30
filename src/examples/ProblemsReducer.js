import * as ActionTypes from "../utils/ActionTypes";

const init = {
  coder: [],
  fetching: false,
  fetched: false,
  error: {}
};

const problems = (problems = init, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PROBLEMS_PENDING:
      return {
        ...problems,
        fetching: true
      };
    case ActionTypes.FETCH_PROBLEMS_FULFILLED:
      return {
        ...problems,
        fetching: false,
        fetched: true,
        coder: action.payload
      };
    case ActionTypes.FETCH_PROBLEMS_REJECTED:
      return {
        ...problems,
        fetching: false,
        error: action.payload
      };
    default:
      return problems;
  }
};

export default problems;
