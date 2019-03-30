import * as ActionTypes from "../utils/ActionTypes";

const init = {
  data: {},
  access_token: "",
  fetching: false,
  fetched: false,
  error: {}
};

const login = (login = init, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_CODER_ACCESS_TOKEN:
      return {
        ...login,
        access_token: action.payload
      };
    case ActionTypes.FETCH_CODER_PENDING:
      return {
        ...login,
        fetching: true
      };
    case ActionTypes.FETCH_CODER_FULFILLED:
      return {
        ...login,
        fetching: false,
        fetched: true,
        data: action.payload
      };
    case ActionTypes.FETCH_CODER_REJECTED:
      return {
        ...login,
        fetching: false,
        error: action.payload
      };
    default:
      return login;
  }
};

export default login;
