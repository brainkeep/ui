import axios from "axios";
import * as ActionTypes from "../utils/ActionTypes";
import * as HostInfo from "../utils/HostInfo";
import * as ResourcePaths from "../utils/ResourcePaths";

export const openDialog = () => dispatch => {
  dispatch({ type: ActionTypes.SET_ADD_DIALOG_OPEN });
};

export const closeDialog = () => dispatch => {
  dispatch({ type: ActionTypes.SET_ADD_DIALOG_CLOSE });
};

export const changeNewQuestionName = question_name => dispatch => {
  dispatch({
    type: ActionTypes.CHANGE_NEW_QUESTION_NAME,
    payload: question_name
  });
};

export const changeNewQuestionUrl = question_url => dispatch => {
  dispatch({
    type: ActionTypes.CHANGE_NEW_QUESTION_URL,
    payload: question_url
  });
};

export const saveNewQuestion = (
  coder_id,
  question_name,
  question_url,
  default_set_id
) => dispatch => {
  dispatch({ type: ActionTypes.SAVE_NEW_QUESTION_PENDING });
  axios({
    method: "post",
    url: HostInfo.BASE_URL + ResourcePaths.SAVE_NEW_QUESTION_PATH,
    responseType: "json",
    timeout: 10000,
    data: {
      coder_id: coder_id,
      question_name: question_name,
      question_url: question_url,
      question_set_id: default_set_id,
      times_solved: 1,
      in_auto_review: false,
      in_selected_review: false
    }
  })
    .then(response =>
      dispatch({
        type: ActionTypes.SAVE_NEW_QUESTION_FULFILLED,
        payload: response
      })
    )
    .catch(err =>
      dispatch({ type: ActionTypes.SAVE_NEW_QUESTION_REJECTED, payload: err })
    )
    .then(() => dispatch({ type: ActionTypes.SET_ADD_DIALOG_CLOSE }));
};
