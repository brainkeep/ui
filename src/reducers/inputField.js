import * as ActionTypes from "../utils/ActionTypes";

const init = {
  input_text: "",
  command_valid: true,
  executing: false
};

const inputField = (inputField = init, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_INPUT_TEXT:
      return {
        ...inputField,
        input_text: action.payload
      };
    case ActionTypes.COMMAND_EXECUTION_BEGIN:
      return {
        ...inputField,
        executing: true
      };
    case ActionTypes.COMMAND_EXECUTION_END:
      return {
        ...inputField,
        executing: false
      };
    case ActionTypes.SET_COMMAND_INVALID:
      return {
        ...inputField,
        command_valid: false
      };
    case ActionTypes.SET_COMMAND_VALID:
      return {
        ...inputField,
        command_valid: true
      };
    default:
      return inputField;
  }
};

export default inputField;
