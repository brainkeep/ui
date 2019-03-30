import * as AddDialogActions from "../../actions/AddDialogActions";
import { connect } from "react-redux";
import AddDialog from "../../components/addDialog/AddDialog";

const mapStateToProps = state => {
  return {
    add_dialog: state.add_dialog,
    login: state.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeDialog: () => dispatch(AddDialogActions.closeDialog()),
    changeNewQuestionName: question_name =>
      dispatch(AddDialogActions.changeNewQuestionName(question_name)),
    changeNewQuestionUrl: question_url =>
      dispatch(AddDialogActions.changeNewQuestionUrl(question_url)),
    saveNewQuestion: (coder_id, question_name, question_url, default_set_id) =>
      dispatch(
        AddDialogActions.saveNewQuestion(
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
)(AddDialog);
