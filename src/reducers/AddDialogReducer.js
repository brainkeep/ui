import * as ActionTypes from '../utils/ActionTypes';

const init = {
  dialog_open: true,
  question_name: '',
  question_url: '',
  saving: false,
  saved: false,
  response: {},
  error: {},
};


const add_dialog = (add_dialog = init, action) => {
  switch (action.type) {
    case ActionTypes.SET_ADD_DIALOG_OPEN:
      return {
        ...add_dialog,
        dialog_open: true
      };
    case ActionTypes.SET_ADD_DIALOG_CLOSE:
      return {
        ...add_dialog,
        dialog_open: false
      };
    case ActionTypes.CHANGE_NEW_QUESTION_NAME:
      return {
        ...add_dialog,
        question_name: action.payload,
      };
    case ActionTypes.CHANGE_NEW_QUESTION_URL:
      return {
        ...add_dialog,
        question_url: action.payload,
      };
    case ActionTypes.SAVE_NEW_QUESTION_PENDING:
      return {
        ...add_dialog,
        saving: true,
      };
    case ActionTypes.SAVE_NEW_QUESTION_FULFILLED:
      return {
        ...add_dialog,
        saving: false,
        saved: true,
        response: action.payload,
      };
    case ActionTypes.SAVE_NEW_QUESTION_REJECTED:
      return {
        ...add_dialog,
        saving: false,
        saved: false,
        error: action.payload,
      };
    default:
      return add_dialog;
  }
};

export default add_dialog;