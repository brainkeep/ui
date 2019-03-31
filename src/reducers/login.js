import Configs from "../utils/Configs";

const init = {
  coder: {},
  password: "",
  fetching: false,
  fetched: false,
  error: {}
};

export default function login(state = init, action) {
  const { actions } = Configs;
  switch (action.type) {
    case actions.CHANGE_CODER_ACCESS_TOKEN:
      return {
        ...state,
        password: action.payload
      };
    case actions.FETCH_CODER_PENDING:
      return {
        ...state,
        fetching: true
      };
    case actions.FETCH_CODER_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        coder: action.payload
      };
    case actions.FETCH_CODER_REJECTED:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
}
