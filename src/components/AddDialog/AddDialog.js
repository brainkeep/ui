import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const AddDialog = ({ add_dialog, login, closeDialog, changeNewQuestionName, changeNewQuestionUrl, saveNewQuestion }) => {

  const handleCloseDialog = () => event => {
    closeDialog()
  }

  const handleChangeQuestionName = () => event => {
    changeNewQuestionName(event.target.value)
  }

  const handleChangeQuestionUrl = () => event => {
    changeNewQuestionUrl(event.target.value)
  }

  const handleSaveButtonClicked = () => () => {
    const coder_id = login.data.coder_id
    const question_set_id = login.data.default_question_set_id
    const question_name = add_dialog.question_name
    const question_url = add_dialog.question_url
    const shouldSaveNewQuestion = question_name.length > 0 && question_url.length > 10
    if (shouldSaveNewQuestion) {
      saveNewQuestion(coder_id, question_name, question_url, question_set_id)
    }
  }

  return (
    <Dialog
      open={add_dialog.dialog_open}
      onClose={handleCloseDialog()}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">New Question</DialogTitle>
      <DialogContent>
        <DialogContentText>
          "A dream doesn't become reality through magic; it takes sweat,
          determination and hard work." - Colin Powell
        </DialogContentText>
        <TextField
          autoFocus
          margin="normal"
          label="Question Name"
          onChange={handleChangeQuestionName()}
          fullWidth
        />
        <TextField
          autoFocus
          margin="normal"
          label="Question Url"
          onChange={handleChangeQuestionUrl()}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog()} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSaveButtonClicked()} color="secondary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )

}

export default AddDialog