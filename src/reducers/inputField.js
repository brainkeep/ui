import Configs from "../utils/Configs";

const init = {
  text: "",
  isValidCommand: true,
  isExecuting: false
};

export default function inputField(state = init, action) {
  const { actions } = Configs;
  switch (action.type) {
    case actions.CHANGE_INPUT_TEXT:
      return {
        ...state,
        text: action.payload
      };
    case actions.COMMAND_EXECUTION_BEGIN:
      return {
        ...state,
        isExecuting: true
      };
    case actions.COMMAND_EXECUTION_END:
      return {
        ...state,
        isExecuting: false
      };
    case actions.SET_COMMAND_INVALID:
      return {
        ...state,
        isValidCommand: false
      };
    case actions.SET_COMMAND_VALID:
      return {
        ...state,
        isValidCommand: true
      };
    default:
      return state;
  }
}
