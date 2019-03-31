const environment = {
  mode: process.env.NODE_ENV,
  host: process.env.REACT_APP_API_HOST,
  port: process.env.REACT_APP_API_PORT
}

const API = {
  baseURL: "http://" + environment.host + ":" + environment.port + "/",
  path: {
    fetchCoder: "kurumi/coder",
    saveNewQuestion: "kurumi/question"
  }
};

const endpoints = {
  fetchCoderURL: access_token =>
    API.baseURL + API.path.fetchCoder + "/" + access_token,
  saveNewQuestionURL: () => API.baseURL + API.path.saveNewQuestion
};

const actions = {
  // Input
  CHANGE_INPUT_TEXT: "CHANGE_INPUT_TEXT",
  COMMAND_EXECUTION_BEGIN: "COMMAND_EXECUTION_BEGIN",
  COMMAND_EXECUTION_END: "COMMAND_EXECUTION_END",
  SET_COMMAND_INVALID: "SET_COMMAND_INVALID",
  SET_COMMAND_VALID: "SET_COMMAND_VALID",
  // Add Dialog
  SET_ADD_DIALOG_OPEN: "SET_ADD_DIALOG_OPEN",
  SET_ADD_DIALOG_CLOSE: "SET_ADD_DIALOG_CLOSE",
  // LoginFC
  CHANGE_CODER_ACCESS_TOKEN: "CHANGE_CODER_ACCESS_TOKEN",
  FETCH_CODER_PENDING: "FETCH_CODER_PENDING",
  FETCH_CODER_FULFILLED: "FETCH_CODER_FULFILLED",
  FETCH_CODER_REJECTED: "FETCH_CODER_REJECTED",
  // New Question
  CHANGE_NEW_QUESTION_NAME: "CHANGE_NEW_QUESTION_NAME",
  CHANGE_NEW_QUESTION_URL: "CHANGE_NEW_QUESTION_URL",
  SAVE_NEW_QUESTION_PENDING: "SAVE_NEW_QUESTION_PENDING",
  SAVE_NEW_QUESTION_FULFILLED: "SAVE_NEW_QUESTION_FULFILLED",
  SAVE_NEW_QUESTION_REJECTED: "SAVE_NEW_QUESTION_REJECTED"
};

const Configs = {
  endpoints,
  actions
};

export default Configs;
