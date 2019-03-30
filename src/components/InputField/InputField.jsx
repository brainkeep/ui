import React from "react";
import TextField from "@material-ui/core/TextField";
import "./InputFiled.css";
import PropTypes from "prop-types";

InputField.propTypes = {
  inputField: PropTypes.object.isRequired,
  changeInputText: PropTypes.func.isRequired,
  executeCommandBegin: PropTypes.func.isRequired,
  setCommandInvalid: PropTypes.func.isRequired,
  setCommandValid: PropTypes.func.isRequired
};

export default function InputField(props) {
  const {
    inputField,
    changeInputText,
    executeCommandBegin,
    setCommandInvalid,
    setCommandValid
  } = props;

  const commands = new Set(["add"]);

  const handleInputChange = () => event => {
    if (!inputField.isValidCommand) {
      setCommandValid();
      changeInputText(event.target.value);
    } else changeInputText(event.target.value);
  };

  const handleKeyPress = () => event => {
    if (event.key === "Enter") {
      if (commands.has(inputField.text)) {
        executeCommandBegin();
      } else {
        setCommandInvalid();
      }
    }
  };

  return (
    <div className="InputField">
      <TextField
        id="standard-search"
        type="search"
        margin="normal"
        fullWidth
        autoFocus
        disabled={inputField.isExecuting}
        error={!inputField.isValidCommand}
        onChange={handleInputChange()}
        onKeyPress={handleKeyPress()}
      />
    </div>
  );
}
