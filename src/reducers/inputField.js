import * as ActionTypes from "../utils/ActionTypes";

const init = {
  text: "",
  isValidCommand: true,
  isExecuting: false
};

export default function inputField(state = init, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_INPUT_TEXT:
      return {
        ...state,
        text: action.payload
      };
    case ActionTypes.COMMAND_EXECUTION_BEGIN:
      return {
        ...state,
        isExecuting: true
      };
    case ActionTypes.COMMAND_EXECUTION_END:
      return {
        ...state,
        isExecuting: false
      };
    case ActionTypes.SET_COMMAND_INVALID:
      return {
        ...state,
        isValidCommand: false
      };
    case ActionTypes.SET_COMMAND_VALID:
      return {
        ...state,
        isValidCommand: true
      };
    default:
      return state;
  }
};


