import * as ActionTypes from "../utils/ActionTypes";

const init = {
  isOpen: false,
  questionName: "",
  questionURL: "",
  saving: false,
  saved: false,
  response: {},
  error: {}
};

export default function addDialog(state = init, action) {
  switch (action.type) {
    case ActionTypes.SET_ADD_DIALOG_OPEN:
      return {
        ...state,
        isOpen: true
      };
    case ActionTypes.SET_ADD_DIALOG_CLOSE:
      return {
        ...state,
        isOpen: false
      };
    case ActionTypes.CHANGE_NEW_QUESTION_NAME:
      return {
        ...state,
        questionName: action.payload
      };
    case ActionTypes.CHANGE_NEW_QUESTION_URL:
      return {
        ...state,
        questionURL: action.payload
      };
    case ActionTypes.SAVE_NEW_QUESTION_PENDING:
      return {
        ...state,
        saving: true
      };
    case ActionTypes.SAVE_NEW_QUESTION_FULFILLED:
      return {
        ...state,
        saving: false,
        saved: true,
        response: action.payload
      };
    case ActionTypes.SAVE_NEW_QUESTION_REJECTED:
      return {
        ...state,
        saving: false,
        saved: false,
        error: action.payload
      };
    default:
      return state;
  }
};
