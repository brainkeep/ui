import axios from "axios";
import Configs from "../../utils/Configs";

const { actions, endpoints } = Configs;

export const openDialog = () => dispatch => {
  dispatch({ type: actions.SET_ADD_DIALOG_OPEN });
};

export const closeDialog = () => dispatch => {
  dispatch({ type: actions.SET_ADD_DIALOG_CLOSE });
};

export const changeNewQuestionName = question_name => dispatch => {
  dispatch({
    type: actions.CHANGE_NEW_QUESTION_NAME,
    payload: question_name
  });
};

export const changeNewQuestionURL = question_url => dispatch => {
  dispatch({
    type: actions.CHANGE_NEW_QUESTION_URL,
    payload: question_url
  });
};

export const saveNewQuestion = (
  coder_id,
  question_name,
  question_url,
  default_set_id
) => dispatch => {
  dispatch({ type: actions.SAVE_NEW_QUESTION_PENDING });
  axios({
    method: "post",
    url: endpoints.saveNewQuestionURL(),
    responseType: "json",
    timeout: 10000,
    coder: {
      coder_id: coder_id,
      questionName: question_name,
      questionURL: question_url,
      question_set_id: default_set_id,
      times_solved: 1,
      in_auto_review: false,
      in_selected_review: false
    }
  })
    .then(response =>
      dispatch({
        type: actions.SAVE_NEW_QUESTION_FULFILLED,
        payload: response
      })
    )
    .catch(err =>
      dispatch({ type: actions.SAVE_NEW_QUESTION_REJECTED, payload: err })
    )
    .then(() => dispatch({ type: actions.SET_ADD_DIALOG_CLOSE }));
};
