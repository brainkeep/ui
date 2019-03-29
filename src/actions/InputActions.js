import * as ActionTypes from '../utils/ActionTypes'

export const changeInputText = inputText => dispatch => {
  dispatch({ type: ActionTypes.CHANGE_INPUT_TEXT, payload: inputText })
}

export const executeCommandBegin = () => dispatch => {
  dispatch({ type: ActionTypes.COMMAND_EXECUTION_BEGIN })
}

export const executeCommandEnd = () => dispatch => {
  dispatch({ type: ActionTypes.COMMAND_EXECUTION_END })
}

export const setCommandInvalid = () => dispatch => {
  dispatch({ type: ActionTypes.SET_COMMAND_INVALID })
}

export const setCommandValid = () => dispatch => {
  dispatch({ type: ActionTypes.SET_COMMAND_VALID })
}