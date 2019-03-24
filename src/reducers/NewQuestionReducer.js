import * as ActionTypes from '../utils/ActionTypes';

const init = {
  question_name: '',
  question_url: '',
  saving: false,
  saved: false,
  response: {},
  error: {},
};

const newQuestion = (newQuestion = init, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_NEW_QUESTION_NAME:
      return {
        ...newQuestion,
        question_name: action.payload,
      };
    case ActionTypes.CHANGE_NEW_QUESTION_URL:
      return {
        ...newQuestion,
        question_url: action.payload,
      };
    case ActionTypes.SAVE_NEW_QUESTION_PENDING:
      return {
        ...newQuestion,
        saving: true,
      };
    case ActionTypes.SAVE_NEW_QUESTION_FULFILLED:
      return {
        ...newQuestion,
        saving: false,
        saved: true,
        response: action.payload,
      };
    case ActionTypes.SAVE_NEW_QUESTION_REJECTED:
      return {
        ...newQuestion,
        saving: false,
        saved: false,
        error: action.payload,
      };
    default:
      return newQuestion;
  }
};

export default newQuestion;