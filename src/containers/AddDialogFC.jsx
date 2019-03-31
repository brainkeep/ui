import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import PropTypes from "prop-types";

AddDialogFC.propTypes = {
  addDialog: PropTypes.object.isRequired,
  login: PropTypes.object.isRequired,
  executeCommandEnd: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
  changeNewQuestionName: PropTypes.func.isRequired,
  changeNewQuestionURL: PropTypes.func.isRequired,
  saveNewQuestion: PropTypes.func.isRequired
};

export default function AddDialogFC(props) {
  const {
    addDialog,
    login,
    executeCommandEnd,
    closeDialog,
    changeNewQuestionName,
    changeNewQuestionURL,
    saveNewQuestion
  } = props;

  const handleDialogClose = () => () => {
    closeDialog();
    executeCommandEnd();
  };

  const handleQuestionNameChange = () => event => {
    changeNewQuestionName(event.target.value);
  };

  const handleQuestionURLChange = () => event => {
    changeNewQuestionURL(event.target.value);
  };

  const handleSaveButtonClicked = () => () => {
    const coder_id = login.coder.coder_id;
    const question_set_id = login.coder.default_question_set_id;
    const question_name = addDialog.questionName;
    const question_url = addDialog.questionURL;
    if (question_name.length > 0 && question_url.length > 10) {
      saveNewQuestion(coder_id, question_name, question_url, question_set_id);
    }
  };

  return (
    <Dialog
      open={addDialog.isOpen}
      onClose={handleDialogClose()}
      aria-labelledby="form-dialog-title"
    >
      <DialogContent>
        <TextField
          autoFocus
          margin="normal"
          label="Question Name"
          fullWidth
          onChange={handleQuestionNameChange()}
        />
        <TextField
          margin="normal"
          label="Question URL"
          fullWidth
          onChange={handleQuestionURLChange()}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose()} color="secondary" size="small">
          Cancel
        </Button>
        <Button
          onClick={handleSaveButtonClicked()}
          color="secondary"
          size="small"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
