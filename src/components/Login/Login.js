import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import LockOpen from '@material-ui/icons/LockOpen';

class Login extends React.Component {

  handleChangeAccessToken = () => event => {
    this.props.changeCoderAccessToken(event.target.value);
  };

  handleKeyPress = () => event => {
    if (event.key === 'Enter') {
      this.processFetchCoder();
    }
  };

  handleButtonClicked = () => () => {
    this.processFetchCoder();
  };

  processFetchCoder = () => {
    const token = this.props.login.access_token;
    if (token.length >= 4) {
      this.props.fetchCoder(token);
    }
  };

  render() {
    return (
      <Dialog open={true}>
        <ListItem>
          <TextField
            id="standard-password-input"
            type="password"
            autoComplete="current-password"
            autoFocus={true}
            onChange={this.handleChangeAccessToken()}
            onKeyPress={this.handleKeyPress()}
          />
          <IconButton
            color="inherit"
            onClick={this.handleButtonClicked()}
          >
            <LockOpen/>
          </IconButton>
        </ListItem>
      </Dialog>
    );
  }
}

export default Login