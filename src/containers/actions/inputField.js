import Configs from "../../utils/Configs";

const { actions } = Configs;

export const changeInputText = inputText => dispatch => {
  dispatch({ type: actions.CHANGE_INPUT_TEXT, payload: inputText });
};

export const executeCommandBegin = () => dispatch => {
  dispatch({ type: actions.COMMAND_EXECUTION_BEGIN });
};

export const executeCommandEnd = () => dispatch => {
  dispatch({ type: actions.COMMAND_EXECUTION_END });
};

export const setCommandInvalid = () => dispatch => {
  dispatch({ type: actions.SET_COMMAND_INVALID });
};

export const setCommandValid = () => dispatch => {
  dispatch({ type: actions.SET_COMMAND_VALID });
};
