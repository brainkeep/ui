// React Redux
import React from 'react';
import {connect} from 'react-redux';
// Material UI
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import AddBox from '@material-ui/icons/AddBox';
// ActionCreators
import * as HeaderActions from '../../actions/HeaderActions';
import * as NewQuestionActions from '../../actions/NewQuestionActions';
// Containers


import './Header.css'

/*

██████╗ ███████╗ █████╗  ██████╗████████╗
██╔══██╗██╔════╝██╔══██╗██╔════╝╚══██╔══╝
██████╔╝█████╗  ███████║██║        ██║   
██╔══██╗██╔══╝  ██╔══██║██║        ██║   
██║  ██║███████╗██║  ██║╚██████╗   ██║   
╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝   ╚═╝   
                                                            
*/

class Header extends React.Component {

  handleChangeQuestionName = () => event => {
    this.props.changeNewQuestionName(event.target.value);
  };

  handleChangeQuestionUrl = () => event => {
    this.props.changeNewQuestionUrl(event.target.value);
  };

  handleSaveButtonClicked = () => () => {
    const coder_id = this.props.coder_id;
    const question_set_id = this.props.question_set_id;
    const question_name = this.props.new_question.question_name;
    const question_url = this.props.new_question.question_url;
    const shouldSaveNewQuestion = question_name.length > 0 &&
      question_url.length > 10;
    if (shouldSaveNewQuestion) {
      this.props.saveNewQuestion(coder_id, question_name, question_url, question_set_id);
    }
  };

  handleClickOpenDialog = () => {
    this.props.openDialog();
  };

  handleCloseDialog = () => {
    this.props.closeDialog();
  };

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="sticky" color="inherit">
          <Toolbar className="ToolBar">
            <Typography variant='display2' color="secondary"
                        className={classes.grow}>
              kurumi
            </Typography>
            <IconButton
              className={classes.menuButton}
              color="secondary"
              aria-label="Menu"
              onClick={this.handleClickOpenDialog}
            >
              <AddBox/>
            </IconButton>
          </Toolbar>
        </AppBar>

        <Dialog
          open={this.props.header_status.dialog_open}
          onClose={this.handleCloseDialog}
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
              onChange={this.handleChangeQuestionName()}
              fullWidth
            />

            <TextField
              autoFocus
              margin="normal"
              label="Question Url"
              onChange={this.handleChangeQuestionUrl()}
              fullWidth
            />

          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleCloseDialog} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.handleSaveButtonClicked()} color="secondary">
              Save
            </Button>
          </DialogActions>

        </Dialog>
      </div>
    );
  }
}

/*

██████╗ ███████╗██████╗ ██╗   ██╗██╗  ██╗
██╔══██╗██╔════╝██╔══██╗██║   ██║╚██╗██╔╝
██████╔╝█████╗  ██║  ██║██║   ██║ ╚███╔╝ 
██╔══██╗██╔══╝  ██║  ██║██║   ██║ ██╔██╗ 
██║  ██║███████╗██████╔╝╚██████╔╝██╔╝ ██╗
╚═╝  ╚═╝╚══════╝╚═════╝  ╚═════╝ ╚═╝  ╚═╝
                                         

*/

const mapStateToProps = (state) => {
  return {
    header_status: state.header_status,
    new_question: state.new_question,
    coder_id: state.coder.data.coder_id,
    question_set_id: state.coder.data.default_question_set_id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openDialog: () => dispatch(HeaderActions.openHeaderDialog()),
    closeDialog: () => dispatch(HeaderActions.closeHeaderDialog()),
    changeNewQuestionName: (text) => dispatch(
      NewQuestionActions.changeNewQuestionName(text)),
    changeNewQuestionUrl: (text) => dispatch(
      NewQuestionActions.changeNewQuestionUrl(text)),
    saveNewQuestion: (coder_id, question_name, question_url, default_set_id) => dispatch(
      NewQuestionActions.saveNewQuestion(coder_id, question_name, question_url, default_set_id)),
  };
};

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(Header));