import React from "react";
import TextField from "@material-ui/core/TextField";
import "./OutputTextField.css";

class OutputTextField extends React.Component {
  render() {
    return (
      <div className="OutputField">
        <TextField
          id="outlined-multiline-flexible"
          label="Output"
          multiline
          rows="20"
          margin="normal"
          variant="outlined"
          fullWidth={true}
        />
      </div>
    );
  }
}

export default OutputTextField;
