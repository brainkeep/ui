import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import LockOpen from "@material-ui/icons/LockOpen";
import PropTypes from "prop-types";

Login.propTypes = {
  login: PropTypes.object.isRequired,
  changeCoderAccessToken: PropTypes.func.isRequired,
  fetchCoder: PropTypes.func.isRequired
};

export default function Login(props) {
  const { login, changeCoderAccessToken, fetchCoder } = props;

  const processFetchCoder = () => {
    const token = login.access_token;
    if (token.length >= 4) {
      fetchCoder(token);
    }
  };

  const handleAccessTokenChange = () => event => {
    changeCoderAccessToken(event.target.value);
  };

  const handleKeyPress = () => event => {
    if (event.key === "Enter") {
      processFetchCoder();
    }
  };

  const handleButtonClicked = () => () => {
    processFetchCoder();
  };

  return (
    <Dialog open>
      <ListItem>
        <TextField
          id="standard-password-input"
          type="password"
          autoComplete="current-password"
          autoFocus
          onChange={handleAccessTokenChange()}
          onKeyPress={handleKeyPress()}
        />
        <IconButton color="inherit" onClick={handleButtonClicked()}>
          <LockOpen />
        </IconButton>
      </ListItem>
    </Dialog>
  );
}
