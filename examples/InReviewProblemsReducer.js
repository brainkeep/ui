import * as ActionTypes from "../src/utils/ActionTypes";

const init = {
  coder: [],
  fetching: false,
  fetched: false,
  fetch_error: false,
  updating: false,
  updated: false,
  update_error: false,
  error: {}
};

const inReviewProblems = (inReviewProblems = init, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_IN_REVIEW_PROBLEMS_PENDING:
      return {
        ...inReviewProblems,
        fetching: true
      };
    case ActionTypes.FETCH_IN_REVIEW_PROBLEMS_REJECTED:
      return {
        ...inReviewProblems,
        fetching: false,
        fetch_error: true,
        error: action.payload
      };
    case ActionTypes.FETCH_IN_REVIEW_PROBLEMS_FULFILLED:
      return {
        ...inReviewProblems,
        fetching: false,
        fetched: true,
        coder: action.payload
      };
    case ActionTypes.UPDATE_IN_REVIEW_PROBLEMS_PENDING:
      return {
        ...inReviewProblems,
        updating: true
      };
    case ActionTypes.UPDATE_IN_REVIEW_PROBLEMS_REJECTED:
      return {
        ...inReviewProblems,
        updating: false,
        update_error: true,
        error: action.payload
      };
    case ActionTypes.UPDATE_IN_REVIEW_PROBLEMS_FULFILLED:
      return {
        ...inReviewProblems,
        updating: false,
        updated: true,
        coder: inReviewProblems.data.filter(
          d => d.problem_id !== action.payload.problem_id
        )
      };
    default:
      return inReviewProblems;
  }
};

export default inReviewProblems;
