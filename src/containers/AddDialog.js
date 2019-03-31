import { connect } from "react-redux";

import * as addDialog from "./actions/addDialog";
import * as inputField from "./actions/inputField"
import AddDialogFC from "./AddDialogFC";


const mapStateToProps = state => {
  return {
    addDialog: state.addDialog,
    login: state.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    executeCommandEnd: () => dispatch(inputField.executeCommandEnd()),
    closeDialog: () => dispatch(addDialog.closeDialog()),
    changeNewQuestionName: question_name =>
      dispatch(addDialog.changeNewQuestionName(question_name)),
    changeNewQuestionURL: question_url =>
      dispatch(addDialog.changeNewQuestionURL(question_url)),
    saveNewQuestion: (coder_id, question_name, question_url, default_set_id) =>
      dispatch(
        addDialog.saveNewQuestion(
          coder_id,
          question_name,
          question_url,
          default_set_id
        )
      )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDialogFC);
