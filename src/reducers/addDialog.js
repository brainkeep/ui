import Configs from "../utils/Configs";

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
  const { actions } = Configs;
  switch (action.type) {
    case actions.SET_ADD_DIALOG_OPEN:
      return {
        ...state,
        isOpen: true
      };
    case actions.SET_ADD_DIALOG_CLOSE:
      return {
        ...state,
        isOpen: false
      };
    case actions.CHANGE_NEW_QUESTION_NAME:
      return {
        ...state,
        questionName: action.payload
      };
    case actions.CHANGE_NEW_QUESTION_URL:
      return {
        ...state,
        questionURL: action.payload
      };
    case actions.SAVE_NEW_QUESTION_PENDING:
      return {
        ...state,
        saving: true
      };
    case actions.SAVE_NEW_QUESTION_FULFILLED:
      return {
        ...state,
        saving: false,
        saved: true,
        response: action.payload
      };
    case actions.SAVE_NEW_QUESTION_REJECTED:
      return {
        ...state,
        saving: false,
        saved: false,
        error: action.payload
      };
    default:
      return state;
  }
}
