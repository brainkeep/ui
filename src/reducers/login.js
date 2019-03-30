import * as ActionTypes from "../utils/ActionTypes";

const init = {
  coder: {},
  password: "",
  fetching: false,
  fetched: false,
  error: {}
};

export default function login(state = init, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_CODER_ACCESS_TOKEN:
      return {
        ...state,
        password: action.payload
      };
    case ActionTypes.FETCH_CODER_PENDING:
      return {
        ...state,
        fetching: true
      };
    case ActionTypes.FETCH_CODER_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        coder: action.payload
      };
    case ActionTypes.FETCH_CODER_REJECTED:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
}
