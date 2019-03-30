import * as ActionTypes from "../utils/ActionTypes";

const init = {
  input_text: "",
  command_valid: true,
  executing: false
};

const input = (input = init, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_INPUT_TEXT:
      return {
        ...input,
        input_text: action.payload
      };
    case ActionTypes.COMMAND_EXECUTION_BEGIN:
      return {
        ...input,
        executing: true
      };
    case ActionTypes.COMMAND_EXECUTION_END:
      return {
        ...input,
        executing: false
      };
    case ActionTypes.SET_COMMAND_INVALID:
      return {
        ...input,
        command_valid: false
      };
    case ActionTypes.SET_COMMAND_VALID:
      return {
        ...input,
        command_valid: true
      };
    default:
      return input;
  }
};

export default input;
